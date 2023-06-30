import { Component } from '@angular/core';
import { Item } from '../modelos/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

items: Item[] = [];

ngOnInit(): void {
  this.items = [
    {
      id:  0,
      title: 'Manzanas',
      price: 10,
      quantity:  5,
      completed: false,
    },
    {
      id:  1,
      title: 'Bananas',
      price: 20,
      quantity:  3,
      completed: true,
    },
    {
      id:  2,
      title: 'kiwis',
      price: 100,
      quantity:  1,
      completed: false,
    }
  ];
}

deleteart(item: Item){
this.items = this.items.filter(x => x.id  !=  item.id);
}
  
}
