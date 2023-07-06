import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../modelos/item';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  @Input() articulo: Item = new Item();
  @Output() deleteart: EventEmitter<Item> = new EventEmitter();
  @Output() toggleart: EventEmitter<Item> = new EventEmitter();//creamos otro evento para que al marcar el getlist tambien desaparezca del total
  
  constructor(){}
  ngOnInit():void{}

  onDelete(articulo:Item){
  this.deleteart.emit(articulo);
  }
  onToggle(articulo: Item){
    articulo.completed = !articulo.completed;
    this.toggleart.emit(articulo);
  }
}
