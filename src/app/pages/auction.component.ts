import { Component, OnInit } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        "id": 0,
        "name": "iphone X",
        "price":0,
        "imageUrl":"aahfsdkajfhdk",
        "type":["Electronic"],

      },{
        "id": 1,
        "name": "iphone 11",
        "price":0,
        "imageUrl":"aahfsdkajfhdk",
        "type":["Electronic"],

      },{
        "id": 2,
        "name": "iphone 12",
        "price":0,
        "imageUrl":"aahfsdkajfhdk",
        "type":["Electronic"],

      },{
        "id": 3,
        "name": "iphone RX",
        "price":0,
        "imageUrl":"aahfsdkajfhdk",
        "type":["Electronic"],

      },{
        "id": 4,
        "name": "iphone X mini",
        "price":0,
        "imageUrl":"aahfsdkajfhdk",
        "type":["Electronic"],

      },{
        "id": 5,
        "name": "iphone X6",
        "price":0,
        "imageUrl":"aahfsdkajfhdk",
        "type":["Electronic"],

      }
    ]; 
  }
  clickEvent(){
    console.log("you made a bid");
    alert("you made a bid!");
    

  }

}
