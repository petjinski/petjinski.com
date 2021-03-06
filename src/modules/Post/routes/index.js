/* ============
 * Post Routes
 * ============
 *
 * The routes and redirects for the Post-module are defined in this file.
 */

export default [
  {
    path: '/posts',
    name: 'Post::List',
    component: () => import('../views/List/Index'),
  },
];
