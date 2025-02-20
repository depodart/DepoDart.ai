import React, { memo, useMemo, useState, useEffect } from 'react';
import { Html, useProgress } from '@react-three/drei';
import { loaderContainerStyle, loaderProgressTextStyle } from '../../style';

// Custom hook to throttle the progress updates
function useThrottledValue(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThrottledValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
}

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Throttle progress updates to every 100ms to avoid too many re-renders.
  const throttledProgress = useThrottledValue(progress, 100);

  // Memoize the formatted progress value.
  const formattedProgress = useMemo(() => throttledProgress.toFixed(2), [throttledProgress]);

  return (
    <Html as="div" center style={loaderContainerStyle}>
      <span className="canvas-loader" />
      <p style={loaderProgressTextStyle}>{formattedProgress}%</p>
    </Html>
  );
};

export default memo(CanvasLoader);
