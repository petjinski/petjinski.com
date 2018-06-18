/* ============
 * Home Module
 * ============
 *
 * Will register the home module.
 */

import Module from '@/utilities/Module';
import routes from './routes';
import locale from './locale';
import store from './store';

new Module('NotFound')
  .registerStore(store)
  .registerRoutes(routes)
  .registerLocale(locale);
