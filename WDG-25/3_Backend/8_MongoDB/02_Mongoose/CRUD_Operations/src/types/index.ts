export type ProductType = {
  name: string;
  price: number;
  stock: number;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
