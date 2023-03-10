import DBModel from './DBModel.js';

/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Product extends DBModel {
  constructor() {
    super('product');
  }
}

export default Product;