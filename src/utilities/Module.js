import store from '@/store';
import { router } from '@/plugins/vue-router';
import { i18n } from '@/plugins/vue-i18n';

/**
 * Module Utility used to help with the modules.
 */
class Module {
  /**
   * The constructor of the Module utility.
   *
   * @param {string} name The name of the module.
   */
  constructor(name) {
    this.$name = name;
  }

  /**
   * Method which will register the routes of a module to the global routes.
   *
   * @param {Array} routes The routes that will be added to the other routes.
   *
   * @returns {Module} The instance of this module helper.
   */
  registerRoutes = (routes) => {
    router.addRoutes(routes);

    return this;
  };

  /**
   * Method which will register a module store to the global store.
   *
   * @param {Object} moduleStore The module store being added to the global store.
   *
   * @returns {Module} The instance of this module helper.
   */
  registerStore(moduleStore) {
    store.registerModule(this.$name, moduleStore);

    return this;
  }

  /**
   * Method which will register a new locale to the global locale.
   *
   * @param {Object} locale The locales to add to the global locale.
   *
   * @returns {Module} The instance of this module helper.
   */
  registerLocale(locale) {
    Object.keys(locale).forEach((item) => {
      const modules = {};

      modules[this.$name] = locale[item];

      i18n.setLocaleMessage(item, modules);
    });

    return this;
  }
}

export default Module;
