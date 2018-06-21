const defaultOptions = {
  elementSeparator: '__',
  modifierSeparator: '--',
};

/**
 * BEM stands for Block, Element and Modifier.
 * By using this class, you can create CSS classes that's
 * according this way of structuring your CSS.
 */
class BEM {
  /**
   * Will initialize a new BEM utility.
   *
   * @param {Object} options The options that can be overridden.
   */
  constructor(options = {}) {
    const realOptions = { ...defaultOptions, ...options };

    this.$elementSeparator = realOptions.elementSeparator;
    this.$modifierSeparator = realOptions.modifierSeparator;
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
   * @returns {BEM} The instance of the current BEM utility.
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
   * @returns {BEM} The instance of the current BEM utility.
   */
  setModifierSeparator(modifierSeparator) {
    this.$modifierSeparator = modifierSeparator;

    return this;
  }

  /**
   * Will compute a BEM class for an element according to the BEM-standard.
   *
   * @param {string} block The block BEM element.
   * @param {string} element The element from the BEM-standard.
   *
   * @returns {string} The correct BEM class.
   */
  has(block, element) {
    return `${block}${this.getElementSeparator()}${element}`;
  }

  /**
   * Will compute a BEM class variant class for a block or element.
   *
   * @param {string} item The item to compute the variant class for.
   * @param {string} variant The name of the variant class.
   *
   * @returns {string} The correct BEM class.
   */
  variant(item, variant) {
    return `${item}${this.getModifierSeparator()}${variant}`;
  }

  /**
   * Will compute an array of BEM variant classes for a block or element.
   *
   * @param {string} item The item to compute the variant classes for.
   * @param {string[]} variants The array of names for the variant classes.
   *
   * @returns {string[]} An array filled with variant BEM classes.
   */
  variants(item, variants) {
    return variants.map(variant => this.variant(item, variant));
  }

  /**
   * Will compute the correct BEM classes for a given item.
   *
   * @param {string} item The item to compute the BEM classes for.
   * @param {string[]} variants The variants that needs to be applied to the item.
   *
   * @returns {string[]} An array filled with BEM classes.
   */
  getClassNames(item, variants = []) {
    const classNames = [item];

    return variants.length === 0 ?
      classNames :
      classNames.concat(this.variants(item, variants));
  }

  /**
   * Will compute the correct BEM classes for a BEM block.
   *
   * @param {string} block The name of the block.
   * @param {string[]} variants The array of variants that needs to be applied.
   *
   * @returns {string[]} An array filled with BEM classes.
   */
  getBlockClassNames(block, variants = []) {
    return this.getClassNames(block, variants);
  }

  /**
   * Will compute the correct BEM classes for a BEM element.
   *
   * @param {string} block The name of the block.
   * @param {string} element The element of the block.
   * @param {string[]} variants The array of variants that needs to be applied.
   *
   * @returns {string[]} An array filled with BEM classes.
   */
  getElementClassNames(block, element, variants = []) {
    const elementClassNames = this.has(block, element);

    return this.getClassNames(elementClassNames, variants);
  }
}

export default BEM;
