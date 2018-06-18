/* ============
 * Home Routes
 * ============
 *
 * The routes and redirects for the Home-module are defined in this file.
 */

export default [
  {
    path: '/404',
    name: 'NotFound::Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/*',
    redirect: {
      name: 'NotFound::Index',
    },
  },
];
