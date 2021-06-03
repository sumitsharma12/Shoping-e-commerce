import { Component, OnInit, Input } from '@angular/core';
import { DeleteitService } from 'src/app/services/deleteit.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  
 

  constructor(private DeleteitService :DeleteitService) { }
  collection:any=[]
  ngOnInit() {
  }

  deletecart(item:any){
      // console.log(item)
      console.log(this.collection)
      this.collection.splice(item-1,1)
      this.DeleteitService.deletecart(item).subscribe((result)=>{
        console.log(result)
      })
      
      }
      

}
