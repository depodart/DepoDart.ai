import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';



const TerrainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-dark">
      <main className="flex-1 bg-primary-dark">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default TerrainLayout;
