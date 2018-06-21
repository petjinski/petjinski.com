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
    component: () => import('../views/Index/index.js'),
  },
  {
    path: '/',
    redirect: {
      name: 'Home::Index',
    },
  },
];
