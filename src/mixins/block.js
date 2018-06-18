/* ============
 * Block Mixin
 * ============
 *
 * Mixin for the block in BEM-styling.
 */

import CSS from '@/utilities/CSS';
import StyleMixin from '@/mixins/style';

export default {
  /**
   * The name of the block.
   */
  block: 'block',

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
     * Computed the correct class names.
     *
     * @returns {Array} The correct CSS class names.
     */
    classNames() {
      return this.css
        .getBlockClassNames(this.$options.block, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
};
