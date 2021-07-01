import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { ProductServiceService } from '../../product-service.service';
import { Product } from '../../product.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  items: Observable<any[]>;
  public product: Product;
  bid: number;

  
  constructor(public productService: ProductServiceService) {
  }
  ngOnInit() {


    this.items = this.productService.getAllDocs();

  }

  public newProductForm = new FormGroup({
    price: new FormControl('', { validators: Validators.required }),
    productName: new FormControl('', { validators: Validators.required }),
    endDate: new FormControl('', { validators: Validators.required }),
    email: new FormControl('', { validators: Validators.required }),
    imageURL: new FormControl('', { validators: Validators.required }),
    bider_email: new FormControl('', { validators: Validators.required }),
    bid_amount: new FormControl('', { validators: Validators.required }),

  });


  clickEvent(newProductForm) {
    this.productService.createItem(newProductForm);
  }

}
