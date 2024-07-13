import { Component } from '@angular/core';
import { ShoesService } from '../Services/shoes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public shoes:ShoesService){}
}
