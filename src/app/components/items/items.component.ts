import { Component } from '@angular/core';
import { Item } from '../modelos/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Item[] = [];
  total: number = 0; //la variable de total esta declarada vacia o en cero y es de tipo numero 

  ngOnInit(): void {
    this.items = [
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

    this.getTotal();
  }

  deleteart(item: Item) {

    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal(); //aca se esta actuañizando la variable del total luego de eliminar un articulo
  }

  toggleart(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter(x => !x.completed)
      .map(x =>  x.quantity*x.price )
      .reduce((acc, x) => acc += x, 0);
  } //esta funcion hace la multiplicacion entre precio y cantidad.
}
