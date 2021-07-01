import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { ProductServiceService } from './product-service.service';
import { Product } from './product.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: Observable<any[]>;
  public product: Product;
  bid: number;

  private subscription: Subscription;

  constructor(public productService: ProductServiceService) {
  }
  ngOnInit() {


    this.items = this.productService.getAllDocs();

  }

  public bidForm = new FormGroup({
    bid: new FormControl('', { validators: Validators.required }),
    email: new FormControl('', { validators: Validators.required }),
  });

  clickEvent(product, bidForm) {
    this.productService.updateItem(product, bidForm);
    console.log(product);
  }

  //seconds undefined geliyor neden?
  //form dan aldığım bid i nasıl içeri yollarım?

  // TODO: form değerleri 2 tarafa da yazıyor çöz!
  // time diff pipe
  // time 0 olursa işlem alma
  //nice to have: buy now masaya vuran alır

}



