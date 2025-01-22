import { AccountService } from './AccountService';
import { productDiscount, userDiscount } from './accountServiceEnum';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  it('Set user discount', () => {
    accountService.setUserDiscount(userDiscount.Premium, 30);
    accountService.setUserDiscount(userDiscount.Standard, 20);

    const discountPremium = accountService.getDiscount(productDiscount.Car, userDiscount.Premium);
    const discountStandard = accountService.getDiscount(productDiscount.Car, userDiscount.Standard);

    expect(discountPremium).toBe(30);
    expect(discountStandard).toBe(20);
  });

  it('Set product and user discount', () => {
    accountService.setUserDiscount(userDiscount.Premium, 30);
    accountService.setUserDiscount(userDiscount.Standard, 20);
    accountService.setUserDiscount(userDiscount.Gold, 30);

    accountService.setProductDiscount(productDiscount.Car, userDiscount.Premium, 10);
    accountService.setProductDiscount(productDiscount.Car, userDiscount.Standard, 5);

    const discountPremium = accountService.getDiscount(productDiscount.Car, userDiscount.Premium);
    const discountStandard = accountService.getDiscount(productDiscount.Car, userDiscount.Standard);
    const discountFree = accountService.getDiscount(productDiscount.Car, userDiscount.Free);
    const discountGold = accountService.getDiscount(productDiscount.Car, userDiscount.Gold);

    expect(discountPremium).toBe(40);
    expect(discountStandard).toBe(25);
    expect(discountGold).toBe(30);
    expect(discountFree).toBe(0);
  });

  it('Set user negative discount', () => {
    expect(() => accountService.setUserDiscount(userDiscount.Premium, -15)).toThrow(
      'Скидка не может быть меньше нуля!'
    );
  });

  it('Set product negative discount', () => {
    expect(() => accountService.setProductDiscount(productDiscount.Food, userDiscount.Premium, -10)).toThrow(
      'Скидка не может быть меньше нуля!'
    );
  });
});
