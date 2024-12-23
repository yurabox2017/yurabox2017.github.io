import { productDiscount, userDiscount } from './accountServiceEnum';

export type UserType = userDiscount;
export type ProductType = productDiscount;

export class AccountService {
  private userDiscounts: Map<UserType, number> = new Map();
  private productDiscounts: Map<ProductType, Map<UserType, number>> = new Map();

  setUserDiscount(user: UserType, discount: number) {
    if (discount < 0) throw new Error('Скидка не может быть меньше нуля!');

    this.userDiscounts.set(user, discount);
  }

  setProductDiscount(productType: ProductType, userType: UserType, discount: number) {
    if (discount < 0) {
      throw new Error('Скидка не может быть меньше нуля!');
    }

    if (!this.productDiscounts.has(productType)) {
      this.productDiscounts.set(productType, new Map());
    }

    const mapProducts = this.productDiscounts.get(productType);
    mapProducts.set(userType, discount);
  }

  getDiscount(productType: ProductType, userType: UserType): number {
    const userDiscount = this.userDiscounts.get(userType) ?? 0;
    const productDiscount = this.productDiscounts.get(productType)?.get(userType) ?? 0;

    return userDiscount + productDiscount;
  }
}
