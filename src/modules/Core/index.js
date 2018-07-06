/* ============
 * Home Module
 * ============
 *
 * Will register the home module.
 */

import Module from '@/utilities/Module';
import routes from './routes/index';
import locale from './locale/index';
import store from './store/index';

new Module('Core')
  .registerStore(store)
  .registerRoutes(routes)
  .registerLocale(locale);
