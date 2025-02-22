import { lazy } from "react";


export const APP_ROUTES = [
  {
    path: '/',
    name: 'Inicio',
    element: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/history',
    name: 'Historial',
    element: lazy(() => import('@/pages/History')),
  },
]   