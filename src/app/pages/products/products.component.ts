import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
public product?: Product;
bidForm: FormGroup;


  constructor(public productService:ProductServiceService) {    
  }
ngOnInit() {
  this.items = this.productService.getAllDocs();

  this.bidForm = new FormGroup({

    'bider_email': new FormControl(null),
    'bid_amount': new FormControl(null),
  });

  }

  

  clickEvent(product){
    this.productService.updateItem(product);

  }

  // TODO: starting price olacak 
  // bid yaptım price artıcak
  // countdown bitince bid i yapan customer a bildirim gidicek
  // time 0 olursa işlem alma
  //nice to have: buy now masaya vuran alır

}



