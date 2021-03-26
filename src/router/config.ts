import React, { Suspense } from 'react';
import { withLazyComponentLoading } from './utils';

import Home from '@/views/Home/index';
import NotFound from '@/views/404';

export type RouteItem = {
  path: string;
  routes?: any;
  redirect?: string;
  component?: any;
};

export const basePath: string = '/cms';

export const routes: RouteItem[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/my/*',
    component: withLazyComponentLoading(React.lazy(() => import('@/views/My/index'))),
    routes: [
      {
        path: 'star',
        component: withLazyComponentLoading(React.lazy(() => import('@/views/My/Star/index'))),
      },
      {
        path: '/sun',
        component: withLazyComponentLoading(React.lazy(() => import('@/views/My/Sun/index'))),
      },
    ],
  },
  {
    path: '/about',
    component: withLazyComponentLoading(React.lazy(() => import('@/views/About/index'))),
  },
  {
    path: '*',
    component: NotFound,
  },
];
