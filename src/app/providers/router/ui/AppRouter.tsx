import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<div>Loading...</div>}>
              <main className="page-wrapper">
                {element}
              </main>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
