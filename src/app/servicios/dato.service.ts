import { Injectable } from '@angular/core';
import { Item } from '../components/modelos/item';

@Injectable({
  providedIn: 'root'
})
export class DatoService {
  items:Item[] = [
    {
      id: 0,
      title: 'Manzanas',
      price: 10,
      quantity: 5,
      completed: false,
    },
    {
      id: 1,
      title: 'Bananas',
      price: 20,
      quantity: 3,
      completed: false,
    },
    {
      id: 2,
      title: 'kiwis',
      price: 100,
      quantity: 1,
      completed: false,
    }
  ];

  constructor() { }

  getItems(){
    return this.items;
  }

  additem(articulo:Item){
    this.items.unshift(articulo);
  }
}
