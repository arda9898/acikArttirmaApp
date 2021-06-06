import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { ProductServiceService } from './product-service.service';
import { Product } from './product.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: Observable<any[]>;
  public product: Product;
  bidForm: FormGroup;
  bid: number;

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Jan 01 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;

  private getTimeDifference(product:Product) {
    //console.log(this.dDay);
    console.log("prod:",this.product);
     this.dDay = new Date(this.product.endDate.seconds);
    //console.log(this.dDay);
    //console.log(this.dDay, new Date(this.product.endDate))
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }


  constructor(public productService: ProductServiceService) {
  }
  ngOnInit() {
    this.items = this.productService.getAllDocs();

  }

  clickEvent(product, bid) {
    this.productService.updateItem(product, bid);
    console.log(product);

    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(product); });
  }

  // TODO: starting price olacak
  // bid yaptım price artıcak
  // countdown bitince bid i yapan customer a bildirim gidicek
  // time 0 olursa işlem alma
  //nice to have: buy now masaya vuran alır

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



