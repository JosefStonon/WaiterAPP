import { Product } from './Products';

export interface CartItem {
  product: Product;
  quantity: number;
}
