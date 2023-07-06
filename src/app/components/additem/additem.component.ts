import { Component, OnInit } from '@angular/core';
import { Item } from '../modelos/item';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  Id:number= 0;
  title: string='';
  price: number= 0;
  quantity: number= 0;

  constructor(){}

  ngOnInit():void{}

  onSubmit(){
    const articulo = new Item();
    articulo.id = this.Id
    articulo.title = this.title
    articulo.price = this.price
    articulo.quantity = this.quantity
    articulo.completed = false;
  }
}
