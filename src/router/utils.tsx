import React, { Suspense } from 'react';
import { RouteItem, basePath } from './config';
import { Route, Navigate } from 'react-router-dom';

export const withLazyComponentLoading = (WrappedComponent: any, LoadingComponent?: any) => (props: {
  [x: string]: any;
}) => {
  return (
    <Suspense fallback={LoadingComponent || <div>Loading...</div>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
};

export const withBasePath = (path: string) => `${basePath}${path}`;

export const generateRouter = (basePath: string, needAdd: boolean = false) => (routerConfig: RouteItem[]) => {
  return routerConfig.map((item: RouteItem, index: number) => {
    const path = needAdd ? `${basePath || ''}${item.path}` : item.path;

    if (item?.redirect) {
      return (
        <Route
          key={index}
          path={basePath || '/'}
          element={<Navigate to={`${basePath || ''}${item.redirect}`} replace />}
        />
      );
    }

    if (item.routes && item.routes.length > 0) {
      return (
        <Route key={index} path={path} element={<item.component />}>
          {generateRouter(basePath)(item.routes)}
        </Route>
      );
    }

    return <Route key={index} path={path} element={<item.component />} />;
  });
};
