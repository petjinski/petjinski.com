/**
 *
 */
class CSS {
  /**
   * Will initialize a new CSS utlitiy.
   *
   * @param {string} elementSeparator The separator of the element.
   * @param {string} modifierSeparator The separator of the modifier.
   */
  constructor(elementSeparator = '__', modifierSeparator = '--') {
    this.$elementSeparator = elementSeparator;
    this.$modifierSeparator = modifierSeparator;
  }

  /**
   * Getter for the element separator.
   *
   * @returns {string} The element separator.
   */
  getElementSeparator() {
    return this.$elementSeparator;
  }

  /**
   * Setter of the element separator.
   *
   * @param {string} elementSeparator The given element separator.
   *
   * @returns {CSS} The instance of the current CSS utility.
   */
  setElementSeparator(elementSeparator) {
    this.$elementSeparator = elementSeparator;

    return this;
  }

  /**
   * Getter for the modifier separator.
   *
   * @returns {string} The modifier separator.
   */
  getModifierSeparator() {
    return this.$modifierSeparator;
  }

  /**
   * Setter of the modifier separator.
   *
   * @param {string} modifierSeparator The given modifier separator.
   *
   * @returns {CSS} The instance of the current CSS utility.
   */
  setModifierSeparator(modifierSeparator) {
    this.$modifierSeparator = modifierSeparator;

    return this;
  }

  /**
   * Will compute a CSS class for an element according to the BEM-standard.
   *
   * @param {string} block The block BEM element.
   * @param {string} element The element from the BEM-standard.
   *
   * @returns {string} The correct CSS class.
   */
  has(block, element) {
    return `${block}${this.getElementSeparator()}${element}`;
  }

  /**
   * Will compute a CSS class variant class for a block or element.
   *
   * @param {string} item The item to compute the variant class for.
   * @param {string} variant The name of the variant class.
   *
   * @returns {string} The correct CSS class.
   */
  variant(item, variant) {
    return `${item}${this.getModifierSeparator()}${variant}`;
  }

  /**
   * Will compute an array of CSS variant classes for a block or element.
   *
   * @param {string} item The item to compute the variant classes for.
   * @param {string[]} variants The array of names for the variant classes.
   *
   * @returns {string[]} An array filled with variant CSS classes.
   */
  variants(item, variants) {
    return variants.map(variant => this.variant(item, variant));
  }

  /**
   * Will compute the correct CSS classes for a given item.
   *
   * @param {string} item The item to compute the CSS classes for.
   * @param {string[]} variants The variants that needs to be applied to the item.
   *
   * @returns {string[]} An array filled with CSS classes.
   */
  getClassNames(item, variants = []) {
    const classNames = [item];

    return variants.length === 0 ?
      classNames :
      classNames.concat(this.variants(item, variants));
  }

  /**
   * Will compute the correct CSS classes for a BEM block.
   *
   * @param {string} block The name of the block.
   * @param {string[]} variants The array of variants that needs to be applied.
   *
   * @returns {string[]} An array filled with CSS classes.
   */
  getBlockClassNames(block, variants = []) {
    return this.getClassNames(block, variants);
  }

  /**
   * Will compute the correct CSS classes for a BEM element.
   *
   * @param {string} block The name of the block.
   * @param {string} element The element of the block.
   * @param {string[]} variants The array of variants that needs to be applied.
   *
   * @returns {string[]} An array filled with CSS classes.
   */
  getElementClassNames(block, element, variants = []) {
    const elementClassNames = this.has(block, element);

    return this.getClassNames(elementClassNames, variants);
  }
}

export default CSS;
