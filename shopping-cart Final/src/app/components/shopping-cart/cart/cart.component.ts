import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { DeleteitService } from 'src/app/services/deleteit.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  product:any;
  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    // private DeleteitService :DeleteitService
  ) { }
  // collection:any=[]
  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }


  
  // deletecart(item:any){
  //   // console.log(item)
  //   console.log(this.collection)
  //   this.collection.splice(item-1,1)
  //   this.DeleteitService.deletecart(item).subscribe((result)=>{
  //     console.log(result)
  //   })
    
  //   }
    

  
}


