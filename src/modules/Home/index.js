/* ============
 * Home Module
 * ============
 *
 * Will register the home module.
 */

import Module from '@/utilities/Module';
import routes from './routes';

new Module('Home').registerRoutes(routes);
