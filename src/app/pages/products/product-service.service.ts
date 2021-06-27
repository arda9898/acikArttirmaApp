import { Bid } from './bid.model';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productsRef: Observable<any[]>;
  productRef: AngularFirestoreDocument<any>;
  bidsRef: Observable<any[]>;
  itemsArray = [];
  bid_amount_prev: number;
  prod: any;


  constructor(private db: AngularFirestore) { }
  /*
  price?: number;
      productName?:String;
      endDate?: Date;
      //bids?: Array<Bid>;
      bider_email:string;
      bid_amount:number;
  */

  /* Get items list */
  GetItemList() {
    this.productsRef = this.db.collection('items').valueChanges();
    console.log('prods:', this.productsRef);
    return this.productsRef;
  }

  getAllDocs() {
    const ref = this.db.collection('items');
    console.log(ref);
    return ref.valueChanges({ idField: 'customIdName' });
  }
  updateItem(product: Product, bidForm: FormGroup) {
    this.productRef = this.db.doc(`items/${product.customIdName}`);
    this.productRef.valueChanges().subscribe(prod => {
      this.prod = prod;
      this.bid_amount_prev = this.prod.bid_amount;
    });

    console.log("bid amount:", product.bid_amount);
    console.log("bid amount prev:", this.bid_amount_prev);

    if (bidForm.value.bid > this.bid_amount_prev) {
      console.log("bid:", bidForm.value.bid);
      product.bid_amount = bidForm.value.bid;
      product.bider_email = bidForm.value.email;
      console.log(product)
      this.productRef.update(product);
      console.log("success")
    }

    this.bid_amount_prev = null;

  }

  //console.log("product:",product.customIdName)
  //console.log("product:",this.productRef)

  // GetIdList() {
  //   this.productsRef = this.db.collection("items").snapshotChanges().subscribe((data) => {
  //     this.itemsArray = data.map(e => {
  //       return {
  //         id: e.payload.doc.id,
  //         productName: e.payload.doc.data()["productName"],
  //         endDate: e.payload.doc.data()["endDate"],
  //         bider_email: e.payload.doc.data()["bider_email"],
  //         bid_amount: e.payload.doc.data()["bid_amount"],
  //       }
  //     })
  //   });

  // }

  //   updateProduct(product: Product){
  //     delete product.id;
  //     this.db.collection('items').doc(product.id).update(product);
  // }

  // /items/SXsAhpXV3VzVW47Ov2Rq/bids/bids

  // GetItemList1(product: Product, id: String) {
  //   this.bidsRef = this.db.collection('items/'+ this.bidsRef.id +'/bids').valueChanges();
  //   return this.productsRef;
  // }

  // BidItem(bid:Bid) {
  //   this.productsRef = this.db.collection('items').valueChanges();
  //   this.productsRef.add({ ...tutorial });
  // }

  // getUserDoc(id) {
  //   return this.db.collection('items').doc(id).valueChanges()
  // }

  // createUser(product: Product) {
  //   return new Promise<any>((resolve, reject) =>{
  //     this.db
  //       .collection("user-collection")
  //       .add(product)
  //       .then(response => { console.log(response) }, error => reject(error));
  //   });
  // }

  // deleteUser(product: Product) {
  //   return this.db
  //     .collection("items")
  //     .doc(product.id)
  //     .delete();
  // }

  // updateUser(product: Product, id) {
  //   return this.db
  //     .collection("items")
  //     .doc(id)
  //     .update({
  //       productName: product.productName,
  //       price: product.price,
  //       endDate: product.endDate,
  //       bids: product.bids
  //     });
  // }
}
