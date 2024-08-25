import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import {Footer} from "@/widgets/Footer/ui/Footer";

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<div>Loading...</div>}>
              {element}
              <Footer/>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
