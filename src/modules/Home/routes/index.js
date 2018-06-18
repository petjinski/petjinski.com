/* ============
 * Home Routes
 * ============
 *
 * The routes and redirects for the Home-module are defined in this file.
 */

export default [
  {
    path: '/home',
    name: 'Home::Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/',
    redirect: {
      name: 'Home::Index',
    },
  },
];
