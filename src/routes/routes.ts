import { lazy } from "react";


export const APP_ROUTES = [
  {
    path: '/',
    element: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/checkout',
    element: lazy(() => import('@/pages/Checkout')),
  },
]   