/* ============
 * Style Mixin
 * ============
 *
 * Mixin for the BEM-styling.
 */

export default {
  /**
   * The properties that this mixin will add.
   */
  props: {
    /**
     * The array of variants.
     */
    variants: {
      type: Array,
      default() {
        return [];
      },
      required: false,
    },

    /**
     * The variant for the styling.
     */
    variant: {
      type: String,
      default: null,
      required: false,
    },
  },

  /**
   * The computed properties that the mixin injects.
   */
  computed: {
    /**
     * Add all variants into the same array and return them.
     *
     * @returns {Array} The variants.
     */
    getVariants() {
      // To make sure that we're not editing the property,
      // we create a copy of the array.
      const variants = this.variants.slice();

      if (this.variant) {
        variants.push(this.variant);
      }

      return variants;
    },
  },

  /**
   * The methods that this mixin can use.
   */
  methods: {
    /**
     * Getter for the name of the BEM class.
     * If a module is used, the hashed BEM class is returned.
     *
     * @param {string} className The BEM class name.
     *
     * @returns {string} The corrected BEM class.
     */
    getClassName(className) {
      if (this.$style) {
        return this.$style[className];
      }

      return className;
    },
  },
};
