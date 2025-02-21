import React, { Suspense, useState } from 'react';
import Terrain from '../../components/terrain/Terrain';

/**
 * TerrainPage - Main page component for terrain visualization
 * 
 * This component serves as the container for the Terrain visualization component.
 * 
 * Search functionality:
 * - Enter coordinates in format: number-number (e.g. "46.5763-7.9904")
 * - Only accepts numeric values separated by a hyphen
 * - Press Enter or click search icon to update the terrain view
 * - Invalid formats will show an error message
 */
const TerrainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [origin, setOrigin] = useState([0, 0]); // Default coordinates (Swiss Alps)
    const [radius, setRadius] = useState(5); // Default radius in km
    const [zoom, setZoom] = useState(12); // Default zoom level
    const [error, setError] = useState('');

    // Handle search input changes
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
      setError('');
    };

    // Handle search submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Parse coordinates from search query
      const coords = searchQuery.split('-').map(num => parseFloat(num.trim()));
      
      if (coords.length !== 2 || coords.some(isNaN)) {
        setError('Please enter valid coordinates in format: number-number');
        return;
      }

      const [lat, lon] = coords;
      if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        setError('Coordinates out of valid range');
        return;
      }

      setOrigin(coords);
      setError('');
    };

    // Handle zoom controls
    const handleZoomIn = () => {
      setZoom(prev => Math.min(prev + 1, 18)); // Max zoom level is typically 18
    };

    const handleZoomOut = () => {
      setZoom(prev => Math.max(prev - 1, 1)); // Min zoom level is typically 1
    };

  return (
    <div className="min-h-screen w-full bg-primary-dark overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Top Navigation Bar with Search */}
        <div className="fixed top-0 left-0 right-0 z-10 bg-primary-dark shadow-lg">
          <div className="px-6 py-4 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-primary-light">Terrain Viewer</h2>
              <p className="text-primary-light">Enter coordinates in this format: 33.5763-7.9904</p>
              </div>
              <form onSubmit={handleSubmit} className="w-full md:w-1/2 lg:w-2/5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter coordinates..."
                    className="w-full px-6 py-3 rounded-xl text-primary-light bg-primary-medium border-2 border-tertiary-light focus:outline-none focus:border-tertiary-dark transition-colors"
                    value={searchQuery}
                    onChange={handleSearch}
                    pattern="-?\d*\.?\d*-{1}-?\d*\.?\d*"
                    title="Enter coordinates in format: number-number"
                    aria-label="Enter coordinates"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg bg-tertiary-light hover:bg-tertiary-dark transition-colors text-primary-dark"
                  >
                    Search
                  </button>
                </div>
                {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
              </form>
            </div>
          </div>
        </div>

        {/* Map Tools Sidebar */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 p-4 rounded-xl bg-primary-medium shadow-xl z-10">
          <h2 className="sr-only">Map Controls</h2>
          <div className="flex flex-col gap-4">
            <button 
              className="p-3 bg-tertiary-light hover:bg-tertiary-dark rounded-lg transition-colors" 
              title="Zoom In"
              onClick={handleZoomIn}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button 
              className="p-3 bg-tertiary-light hover:bg-tertiary-dark rounded-lg transition-colors" 
              title="Zoom Out"
              onClick={handleZoomOut}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
              </svg>
            </button>
            <button className="p-3 bg-tertiary-light hover:bg-tertiary-dark rounded-lg transition-colors" title="Layer Toggle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </button>
            <button className="p-3 bg-tertiary-light hover:bg-tertiary-dark rounded-lg transition-colors" title="Measure">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Terrain View */}
        <div className="flex-1 mt-32">
          <Terrain origin={origin} radius={radius} zoom={zoom} />
        </div>
      </div>
    </div>
  );
};

export default TerrainPage;
