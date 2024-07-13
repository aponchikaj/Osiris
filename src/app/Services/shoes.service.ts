import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  Osiris_Shoes:Array<Shoes> = [
    {
      id:1,
      Name:'Osiris D3',
      Title:"D3 2001 BLACK/LT.GREY/RED",
      Price:119.99,
      Img:'../../assets/images/DarkShoes.png',
      Link:'https://osirisshoes.com/collections/footwear/products/d3-2001-black-lt-grey-red',
      ColorFrom:'#5B5B5B',
      ColorTo:'#2A2A2C'
    },
    {
      id:2,
      Name:'Osiris D3 OG',
      Title:"D3 OG ROSE/WHITE/BLACK",
      Price:95.00,
      Img:'../../assets/images/PinkShoe.png',
      Link:'https://osirisshoes.com/collections/footwear/products/d3-og-rose-white-black',
      ColorFrom:'#F4CDD2',
      ColorTo:'#E9929B'
    },
    {
      id:3,
      Name:'Osiris D3 OG',
      Title:"D3 OG TAN/TAN/BLACK",
      Price:95.00,
      Img:'../../assets/images/GrayShoe.png',
      Link:'https://osirisshoes.com/collections/footwear/products/d3-og-black-black-black-copy',
      ColorFrom:'#EDE1D6',
      ColorTo:'#C6BDB7'
    },
    {
      id:4,
      Name:'Osiris D3',
      Title:"D3 2001 GOLD/BLACK/WHITE",
      Price:119.99,
      Img:'../../assets/images/GoldenShoe.png',
      Link:'https://osirisshoes.com/collections/footwear/products/d3-2001-gold-black-white',
      ColorFrom:'#E5EBF1',
      ColorTo:'#D7A554'
    },
    {
      id:5,
      Name:'Osiris D3 OG',
      Title:"D3 OG WHITE/WHITE/GUM",
      Price:95.00,
      Img:'../../assets/images/WhiteShoe.png',
      Link:'https://osirisshoes.com/collections/footwear/products/d3-og-black-black-black-2',
      ColorFrom:'#F3F5F9',
      ColorTo:'#929292'
    },
  ]

}

interface Shoes{
  id:number,
  Name:string,
  Title:string,
  Price:number,
  Img:string,
  Link:string,
  ColorFrom:string,
  ColorTo:string
}
