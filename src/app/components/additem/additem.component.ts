import { Component, OnInit } from '@angular/core';
import { Item } from '../modelos/item';
import { DatoService } from 'src/app/servicios/dato.service';
import { Router } from '@angular/router';
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

  constructor(private datoService: DatoService, private router:Router){}

  ngOnInit(): void{
    
  }

  onSubmit(){
    const articulo = new Item();
    articulo.id = this.Id
    articulo.title = this.title
    articulo.price = this.price
    articulo.quantity = this.quantity
    articulo.completed = false;
    this.datoService.additem(articulo)
    this.router.navigate(['/']);
    }
}
