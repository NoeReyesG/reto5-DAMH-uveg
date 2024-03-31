import { Injectable } from '@angular/core';
import { New } from '../models/new';

@Injectable({
  providedIn: 'root'
})
export class SNewsService {
  allNews: New[] = [
    {
      titulo: "Llueve un friego",
      img: "../assets/lluvia.jpg",
      fecha: new Date(),
      descripcion: `Llovió bien macizo y se rellenaron todos los ríos lagos, arroyos, presas y charcos de mi colonia.
      Tregua en la sequía en México. Se limpió el lago de patzcuaro, el de Xochimilco, se recuperó el ajolote
      y la vaquita marina, que vive en el Oceano y no tiene que ver, pero bueno, quién soy yo para negarme a dar buenas noticias al fin`
    }
  ]
  constructor() { }


  addNew(nextNew: New){
    this.allNews.unshift(nextNew);
    console.log(this.allNews);
  }
  getNews(){
    return this.allNews;
  }
}
