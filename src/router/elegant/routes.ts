/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types';

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '无权限',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.blank$view.404',
    meta: {
      title: '页面不存在',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.blank$view.500',
    meta: {
      title: '服务器错误',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'about',
    path: '/about',
    component: 'layout.base$view.about',
    meta: {
      title: '关于',
      icon: 'fluent:book-information-24-regular',
      order: Number.MAX_SAFE_INTEGER,
      constant: true
    }
  },
  {
    name: 'back-action',
    path: '/back-action',
    component: 'layout.base$view.back-action',
    meta: {
      title: '备份任务',
      order: 2
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: '首页',
      icon: 'mdi:monitor-dashboard',
      order: 1,
      constant: true
    }
  },
  {
    name: 'iframe-page',
    path: '/iframe-page/:url',
    component: 'layout.base$view.iframe-page',
    props: true,
    meta: {
      title: 'iframe-page',
      constant: true,
      hideInMenu: true,
      keepAlive: true
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
    component: 'layout.blank$view.login',
    props: true,
    meta: {
      title: '登录',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'text-convert',
    path: '/text-convert',
    component: 'layout.base',
    meta: {
      title: '文本处理',
          icon: 'mdi:format-text',
      constant: true,
      order: 2
    },
    children: [
      {
        name: 'text-convert_nr-buffer',
        path: '/text-convert/nr-buffer',
        component: 'view.text-convert_nr-buffer',
        meta: {
          title: 'NR Buffer',
          icon:'mdi:numeric-10-box-multiple-outline'
        }
      }
    ]
  }
];
