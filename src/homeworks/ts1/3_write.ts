import { faker } from '@faker-js/faker';
/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
export type Category = {
  id: number;
  name: string;
  photo?: string;
};

export type Product = {
  id: number;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: Cost;
};

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: Profit;
};
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => ({
  id: faker.number.int(),
  name: faker.commerce.product(),
  photo: faker.image.avatar(),
  desc: faker.commerce.productDescription(),
  createdAt: createdAt,
  oldPrice: +faker.commerce.price({ min: 1000, max: 5000 }),
  price: +faker.commerce.price({ min: 1000, max: 5000 }),
  category: {
    id: faker.number.int(),
    name: faker.company.name(),
    photo: faker.image.avatar(),
  },
});

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Cost | Profit => ({
  id: faker.string.sample(),
  createdAt: createdAt,
  name: faker.person.fullName(),
  desc: 'desc',
  amount: faker.number.int(),
  category: {
    id: faker.number.int(),
    name: faker.company.name(),
    photo: faker.image.avatar(),
  },
  type: this,
});
