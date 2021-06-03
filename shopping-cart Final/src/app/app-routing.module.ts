import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CartComponent } from './components/shopping-cart/cart/cart.component'
import { CheckoutComponent } from './checkout/checkout.component'

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {path:'checkout',component:CheckoutComponent},
  { path: 'login', component: LoginComponent },
  {path:'cart',component:CartComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
