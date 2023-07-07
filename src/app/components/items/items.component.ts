import { Component } from '@angular/core';
import { Item } from '../modelos/item';
import { DatoService } from 'src/app/servicios/dato.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  Items: Item[] = [];
  total: number = 0; //la variable de total esta declarada vacia o en cero y es de tipo numero 


  constructor(private datoService: DatoService){{

  }}
  ngOnInit(): void {
    //this.items = []

    this.Items = this.datoService.getItems();
    this.getTotal();
  }

  deleteart(item: Item) {

    this.Items = this.Items.filter(x => x.id != item.id);
    this.getTotal(); //aca se esta actuañizando la variable del total luego de eliminar un articulo
  }

  toggleart(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.Items
      .filter(x => !x.completed)
      .map(x =>  x.quantity*x.price )
      .reduce((acc, x) => acc += x, 0);
  } //esta funcion hace la multiplicacion entre precio y cantidad.
}
