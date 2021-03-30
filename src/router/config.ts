import React from 'react';
import { withLazyComponentLoading } from './utils';

import PageLayout, { withPageLayout } from '@/layout/index';
import Home from '@/views/Home/index';
import NotFound from '@/views/404';

export type RouteItem = {
  path: string;
  routes?: any;
  redirect?: string;
  component?: any;
  name?: string;
  subMenuName?: string;
  meta?: {
    [key: string]: any;
  };
};

export const basePath: string = '/cms';

export const routes: RouteItem[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/home',
    name: '首页',
    component: withPageLayout(Home),
  },
  {
    path: '/my/*',
    name: '个人中心',
    subMenuName: '我的',
    component: withPageLayout(withLazyComponentLoading(React.lazy(() => import('@/views/My/index')))),
    routes: [
      {
        path: '/star',
        name: '星星',
        subMenuName: '我的',
        component: withLazyComponentLoading(React.lazy(() => import('@/views/My/Star/index'))),
        routes: [
          {
            path: '/test1',
            name: 'Test1',
            component: withLazyComponentLoading(React.lazy(() => import('@/views/My/Test1/index'))),
          },
          {
            path: '/test2',
            name: 'Test2',
            component: withLazyComponentLoading(React.lazy(() => import('@/views/My/Test2/index'))),
          },
        ],
      },
      {
        path: '/sun',
        name: '太阳',
        component: withLazyComponentLoading(React.lazy(() => import('@/views/My/Sun/index'))),
      },
    ],
  },
  {
    path: '/about',
    name: '关于我们',
    component: withPageLayout(withLazyComponentLoading(React.lazy(() => import('@/views/About/index')))),
  },
  {
    path: '/404',
    name: '404页面',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const generateMenuConfig = (routes: RouteItem[]) => {
  const getConfig = (routes: any, basePath: string = '') => {
    const config: any = [];

    for (const item of routes) {
      let { name, path } = item;

      path = /\*/g.test(path) ? basePath + path.replace('/*', '') : basePath + path;

      if (item.routes) {
        const routes = getConfig([...[{ name, path: '' }], ...item.routes], path);
        config.push({
          subMenuOnlyKey: routes.map((item: any) => item.path).join('-'),
          name: item.subMenuName,
          path,
          routes: routes,
        });
      }

      if (item.name && !item.routes) {
        config.push({ name, path });
      }
    }
    return config;
  };

  return getConfig(routes, basePath);
};

export const menuConfig = generateMenuConfig(routes);

export const getSubMenuOnlyKeyByPath = (path: string | string[]): string[] => {
  const recursion = (list: any) => {
    const lookupList = Array.isArray(path) ? path : [path];
    let result: string[] = [];

    for (const item of list) {
      if (item.routes) {
        for (const lookupItem of lookupList) {
          console.log(lookupItem, item.subMenuOnlyKey);
          // eslint-disable-next-line no-loop-func
          item.subMenuOnlyKey.split('-').forEach((element: string) => {
            lookupItem.indexOf(element) > -1 && result.push(item.subMenuOnlyKey);
          });
        }
        result = [...result, ...recursion(item.routes)];
      }
    }

    return result;
  };

  return recursion(menuConfig);
};
