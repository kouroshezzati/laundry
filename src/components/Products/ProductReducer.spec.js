import product from './ProductReducers';
import {
  setNumberProduct,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from './ProductActions';

describe('Reducer', () => {
  it('should add to selectedProducts', () => {
    expect.hasAssertions();
    expect(
      product(undefined, setNumberProduct(1, ADD_PRODUCT)).selectedProducts
    ).toEqual({
      '1': 1
    });
  });
  it('should remove from selectedProduct', () => {
    expect.assertions(2);
    expect(
      product(undefined, setNumberProduct(1, REMOVE_PRODUCT)).selectedProducts
    ).toEqual({
      '1': 0
    });
    expect(
      product(
        { selectedProducts: { 1: 2 } },
        setNumberProduct(1, REMOVE_PRODUCT)
      ).selectedProducts
    ).toEqual({
      '1': 1
    });
  });
});
