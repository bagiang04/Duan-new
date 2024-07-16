export interface IProduct {
  name: string;
  image: string;
  cat_id: number;
  price: number;
  id?: number;
}
// export type IProductLite = Pick<IProduct,'title'|'thumbnail'|'price'>;