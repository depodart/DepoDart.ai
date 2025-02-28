import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * usePageData - Custom hook for data fetching with loading state management
 * Features:
 * - Handles loading states
 * - Caches data
 * - Provides retry functionality
 * - Supports debouncing
 * - Exposes loading progress (if available)
 * - Manages error states
 */
const usePageData = (
  fetchFn, 
  options = { 
    initialData: null,
    dependencies: [],
    cacheKey: null,
    debounceMs: 0,
    minLoadTimeMs: 300,
    onSuccess: null,
    onError: null
  }
) => {
  // Destructure options with defaults
  const { 
    initialData = null,
    dependencies = [],
    cacheKey = null,
    debounceMs = 0,
    minLoadTimeMs = 300, // Minimum loading time for better UX
    onSuccess = null,
    onError = null
  } = options;

  // States
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  // Refs
  const isMounted = useRef(true);
  const debouncedTimeout = useRef(null);
  const loadingStartTime = useRef(null);
  const progressIntervalRef = useRef(null);

  // Cache implementation
  const cache = useRef({});

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchData = useCallback(async () => {
    // Prevent multiple fetch calls
    if (debouncedTimeout.current) {
      clearTimeout(debouncedTimeout.current);
      debouncedTimeout.current = null;
    }

    // Clear any existing progress interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }

    // Set loading state
    setIsLoading(true);
    setProgress(0);
    setError(null);
    loadingStartTime.current = Date.now();

    // Check cache if key provided
    if (cacheKey && cache.current[cacheKey]) {
      const cachedData = cache.current[cacheKey];
      setData(cachedData);
      
      // Simulate minimum loading time for better UX
      const elapsed = Date.now() - loadingStartTime.current;
      const timeToWait = Math.max(0, minLoadTimeMs - elapsed);
      
      await new Promise(resolve => setTimeout(resolve, timeToWait));
      
      if (isMounted.current) {
        setIsLoading(false);
        setProgress(100);
      }
      return;
    }

    // Simulate loading progress
    progressIntervalRef.current = setInterval(() => {
      if (isMounted.current) {
        setProgress(prev => {
          const next = Math.min(prev + (100 - prev) * 0.1, 90);
          return next;
        });
      }
    }, 300);

    try {
      // Call the fetch function
      const result = await fetchFn();
      
      // Cache the result if cache key provided
      if (cacheKey) {
        cache.current[cacheKey] = result;
      }

      // Calculate elapsed time for minimum loading duration
      const elapsed = Date.now() - loadingStartTime.current;
      const timeToWait = Math.max(0, minLoadTimeMs - elapsed);
      
      await new Promise(resolve => setTimeout(resolve, timeToWait));
      
      if (isMounted.current) {
        setData(result);
        setProgress(100);
        
        // Call success callback if provided
        if (onSuccess) {
          onSuccess(result);
        }
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err);
        
        // Call error callback if provided
        if (onError) {
          onError(err);
        }
      }
    } finally {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  }, [fetchFn, cacheKey, minLoadTimeMs, onSuccess, onError]);

  const refetch = useCallback(() => {
    // Debounce the fetch call if specified
    if (debounceMs > 0) {
      if (debouncedTimeout.current) {
        clearTimeout(debouncedTimeout.current);
      }
      
      debouncedTimeout.current = setTimeout(() => {
        fetchData();
      }, debounceMs);
    } else {
      fetchData();
    }
  }, [fetchData, debounceMs]);

  // Clear cache for specific key or all
  const clearCache = useCallback((specificKey = null) => {
    if (specificKey) {
      delete cache.current[specificKey];
    } else {
      cache.current = {};
    }
  }, []);

  // Effect for fetch and cleanup
  useEffect(() => {
    isMounted.current = true;
    refetch();

    return () => {
      isMounted.current = false;
      
      if (debouncedTimeout.current) {
        clearTimeout(debouncedTimeout.current);
      }
      
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    data,
    isLoading,
    progress,
    error,
    refetch,
    clearCache
  };
};

export default usePageData; 