import { UserAuthComponent } from './user-auth/user-auth.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { SellerUpdateProductsComponent } from './seller-update-products/seller-update-products.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
{ path:' ',component:HomeComponent},
{ path:'home',component:HomeComponent},
{ path:'seller-auth',component:SellerAuthComponent},
{ path:'seller-home', canActivate:[authGuard],component:SellerHomeComponent },
{ path:'seller-products',component:SellerProductsComponent},
{ path:'seller-update-products/:id',component:SellerUpdateProductsComponent},
{ path:'search/:query',component:SearchComponent},
{ path:'details/:productId',component:ProductDetailsComponent},
{ path:'user-auth',component:UserAuthComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
