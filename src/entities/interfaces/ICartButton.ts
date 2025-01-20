import { ICartProduct } from './ICartProduct';

export default interface ICartButton {
  product: ICartProduct;
  count: number;
  // addProduct: () => void;
  // increment: () => void;
  // decrement: () => void;
}
