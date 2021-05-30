import {Bid} from './bid.model'
export interface Product {
    customIdName?: string;
    price?: number;
    productName?:String;
    endDate?: Date;
    //bids?: Array<Bid>;
    bider_email:string;
    bid_amount:number;

  }