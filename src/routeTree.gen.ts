/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NewsPostIdIndexImport } from './routes/news/$postId/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const NewsIndexLazyImport = createFileRoute('/news/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const NewsIndexLazyRoute = NewsIndexLazyImport.update({
  path: '/news/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/news/index.lazy').then((d) => d.Route))

const NewsPostIdIndexRoute = NewsPostIdIndexImport.update({
  path: '/news/$postId/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/news/': {
      id: '/news/'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/news/$postId/': {
      id: '/news/$postId/'
      path: '/news/$postId'
      fullPath: '/news/$postId'
      preLoaderRoute: typeof NewsPostIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  NewsIndexLazyRoute,
  NewsPostIdIndexRoute,
})

/* prettier-ignore-end */


/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/news/",
        "/news/$postId/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/news/": {
      "filePath": "news/index.lazy.tsx"
    },
    "/news/$postId/": {
      "filePath": "news/$postId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */