import { createRouter, createWebHashHistory } from 'vue-router';

const Page = () => import('./views/Page.vue');
const NotFound = () => import('./views/NotFound.vue');
const Catalog = () => import('./views/Catalog.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Page,
      props: {
        slug: 'inicio',
      },
    },
    {
      path: '/contacto',
      name: 'Contact',
      component: Page,
      props: {
        slug: 'contacto',
      },
    },
    {
      path: '/catalogo/:type',
      name: 'Catalog',
      component: Catalog,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
