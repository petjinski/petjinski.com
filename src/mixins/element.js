/* ============
 * Element Mixin
 * ============
 *
 * Mixin for the element in BEM-styling.
 */

import CSS from '@/utilities/CSS';
import StyleMixin from '@/mixins/style';

export default {
  /**
   * The name of the element.
   */
  element: 'element',

  /**
   * The mixins used by this mixin.
   */
  mixins: [
    StyleMixin,
  ],

  /**
   * The data used for this mixins.
   *
   * @returns {Object} The view model.
   */
  data() {
    return {
      css: new CSS(),
    };
  },

  /**
   * The computed properties that the mixin injects.
   */
  computed: {
    /**
     * Will get the block from the parent.
     *
     * @returns {string} The correct block name.
     */
    block() {
      return this.$parent.block || this.$parent.$options.block;
    },

    /**
     * Will get the CSS module class names.
     *
     * @returns {Array} The CSS module class names.
     */
    classNames() {
      return this.css
        .getElementClassNames(this.block, this.$options.element, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
};
