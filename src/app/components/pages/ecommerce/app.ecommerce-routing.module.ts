import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'productoverview', loadChildren: () => import('./productoverview/productoverview.module').then(m => m.ProductoverviewModule)},
    {path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
    {path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)},
  ])],
  exports: [RouterModule]
})
export class AppEcommerceRoutingModule { }