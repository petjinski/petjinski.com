/* ============
 * Home Routes
 * ============
 *
 * The routes and redirects for the Home-module are defined in this file.
 */

export default [
  {
    path: '/404',
    name: 'Core::NotFound.Index',
    component: () => import('../views/NotFound/Index/index.js'),
  },
  {
    path: '/*',
    redirect: {
      name: 'Core::NotFound.Index',
    },
  },
];
