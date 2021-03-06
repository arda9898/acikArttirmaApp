import { TimeDiffPipe } from './../libs/pipes/time-diff.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { CartComponent } from './pages/products/cart/cart.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
//import { AuthService } from './pages/user/authService.service';
import { TimestampDateFormatPipe } from 'src/libs';
import { NewProductComponent } from './pages/products/new-product/new-product/new-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    CartComponent,
    SignInComponent,
    SignUpComponent,
    TimestampDateFormatPipe,
    TimeDiffPipe,
    NewProductComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, "angular-auth-firebase"),
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],

  // providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
