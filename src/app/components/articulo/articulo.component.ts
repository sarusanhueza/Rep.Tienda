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
  
  onDelete(articulo:Item){
  this.deleteart.emit(articulo);
  }
  
}
