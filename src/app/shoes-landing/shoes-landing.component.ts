import { Component } from '@angular/core';
import { ShoesService } from '../Services/shoes.service';

@Component({
  selector: 'app-shoes-landing',
  templateUrl: './shoes-landing.component.html',
  styleUrl: './shoes-landing.component.css'
})
export class ShoesLandingComponent {
  constructor(public Shoes:ShoesService){}

  x:number =0

  next(){
    this.x = this.x+=1
    console.log(this.Shoes.Osiris_Shoes[this.x])
    if(this.x > 4){
      this.x = 0
    }
  }
  before(){
    this.x = this.x-=1
    console.log(this.Shoes.Osiris_Shoes[this.x])
    if(this.x > 4){
      this.x = 0
    }
    if(this.x < 0){
      this.x = 4
    }
  }

  
}
