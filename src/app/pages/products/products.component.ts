import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
ngOnInit() {
  }

  clickEvent(){
    console.log("you made a bid");
    alert("you made a bid!");
    

  }

  // TODO: starting price olacak 
  // bid yaptım price artıcak
  // countdown bitince bid i yapan customer a bildirim gidicek
  //nice to have: buy now masaya vuran alır

}