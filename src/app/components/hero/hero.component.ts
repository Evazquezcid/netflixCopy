import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/filmsInterfaces';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroInfo: HeroInterface;

  constructor() {

    this.heroInfo = {
      title: "Las 5 peliculas más populares en España hoy",
      
      films:[{
        src:"../../../assets/numeros/1.png" ,
        alt: "numero1",
        class:"numero"
      },{
        src:"../../../assets/Comedia/laterminal.webp" ,
        alt: "laterminal",
        class:"peli"
      },{
        src:"../../../assets/numeros/2.png" ,
        alt: "numero1",
        class:"numero"
      },{
        
        src:"../../../assets/Anime/evangelion.webp" ,
        alt: "evangelion",
        class:"peli"
      },{
        src:"../../../assets/numeros/3.png" ,
        alt: "numero1",
        class:"numero"
      },{
        
        src:"../../../assets/Sci-fi/12monos.webp" ,
        alt: "reina",
        class:"peli"
        
      
      },{
        src:"../../../assets/numeros/4.png" ,
        alt: "numero1",
        class:"numero"
      },{
       
        src:"../../../assets/Sci-fi/core.webp" ,
        alt: "ricos",
        class:"peli"
      },{
        src:"../../../assets/numeros/5.png" ,
        alt: "numero1",
        class:"numero"
      },{
        
        src:"../../../assets/Comedia/dictador.webp" ,
        alt: "didactador",
        class:"peli"
      },]
    }




   }

  ngOnInit(): void {
  }

}
