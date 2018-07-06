/* =========
 * Petjinski Frontend
 * ========
 * The frontend of the petjinski.com website.
 * This is a Vue powered web application, which uses the most powerful Vue plugins.
 */

import Vue from 'vue';

// Import the plugins used in this project.
import './plugins/vuex';
import './plugins/axios';
import './plugins/bem';
import './plugins/prism';
import './plugins/markdown-it';
import './plugins/normalize.css';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';

// Import the modules used in this project.
import './modules/Home';
import './modules/Post';
import './modules/Core';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

/* ============
 * Ready... Set... Go!
 * ============
 *
 * Last but not least, let's create a new
 * Vue instance and bind the instance
 * to the #app element.
 */
new Vue({
  /**
   * The name of the application.
   */
  name: 'PetjinskiFrontend',

  /**
   * The localization plugin.
   */
  i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
}).$mount('#app');
