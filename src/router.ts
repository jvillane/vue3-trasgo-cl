import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import(`./views/Home.vue`);
const Contact = () => import(`./views/Contact.vue`);
const NotFound = () => import(`./views/NotFound.vue`);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacto',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/catalogo/muebles',
      name: 'Furniture',
      component: Contact
    },
    {
      path: '/catalogo/madera',
      name: 'Wood',
      component: Contact
    },
    {
      path: "/:catchAll(.*)",
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

export default router;
