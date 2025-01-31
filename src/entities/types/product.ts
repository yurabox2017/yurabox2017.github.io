export type Category = {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
  commandId: string;
};

export type Product = {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  commandId: string;
  category: Category;
};
