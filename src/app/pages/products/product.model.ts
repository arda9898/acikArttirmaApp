export interface Product {
  customIdName?: string;
  price?: number;
  productName?: String;
  endDate?: {
    seconds: number,
    nanoseconds: number;
  };
  bider_email: string;
  bid_amount: number;
  imageURL:string;

}
