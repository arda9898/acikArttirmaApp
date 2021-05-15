import { Time } from "@angular/common";

export class Product{
  constructor(
    public id: number,
    public name: string, 
    public price: number, 
    public type: Array<string>,  
    public imageUrl: string,
    //TODO saat için gün olan bul(gün saat dakika saniye geri sayım yapsın)
    //public timeRemaining:Time
    )  {}

}
