import { FilmsInterface } from './models/filmsInterfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public estrenos: FilmsInterface = {
    title: "Estrenos",
    films: [{
      src: "../../../assets/estrenos/alas.png",
      alt:"alas ",
      class:"peli"

    },{
      src: "../../../assets/estrenos/lava.png",
      alt:"lava ",
      class:"peli"

    },{
      src: "../../../assets/estrenos/madre.png",
      alt:"madre ", 
      
      class:"peli"

    },{
      src: "../../../assets/estrenos/summer.png",
      alt:"summer ", 
      class:"peli"


    },{
      src: "../../../assets/estrenos/tata.png",
      alt:"tata ",
      class:"peli"

    }]
  };
  public infantil: FilmsInterface = {
  title: "Infantil",
  films: [{
    src: "../../../assets/estrenos/1.png",
    alt:"peli1 ",
    class:"peli"

  },{
    src: "../../../assets/estrenos/2.png",
    alt:"peli2 ",
    class:"peli"

  },{
    src: "../../../assets/estrenos/3.png",
    alt:" peli3",
    class:"peli"

  },{
    src: "../../../assets/estrenos/4.png",
    alt:"peli4 ", 
    class:"peli"


  },{
    src: "../../../assets/estrenos/5.png",
    alt:"peli5 ",
    class:"peli"
  }]
  
};
public Terror: FilmsInterface = {
  title: "Terror",
  films: [{
    src: "../../../assets/Terror/infiernoagua.webp",
    alt:"peli1 ",
    class:"peli"

  },{
    src: "../../../assets/Terror/multiple.webp",
    alt:"peli2 ",
    class:"peli"

  },{
    src: "../../../assets/Terror/malasana.webp",
    alt:" peli3",
    class:"peli"

  },{
    src: "../../../assets/Terror/calleterror.jpg",
    alt:"peli4 ", 
    class:"peli"


  },{
    src: "../../../assets/Terror/life.webp",
    alt:"peli5 ",
    class:"peli"
  }]


};
//   public ParaPasarElrato: FilmsInterface = {
//   title: "Para pasar el rato",
//   films: [{
//     src: "../../../assets/pasarelrato/1.png",
//     alt:"peli1 ",
//     class:"peli"

//   },{
//     src: "../../../assets/pasarelrato/2.png",
//     alt:"peli2 ",
//     class:"peli"

//   },{
//     src: "../../../assets/pasarelrato/3.png",
//     alt:" peli3",
//     class:"peli"

//   },{
//     src: "../../../assets/pasarelrato/4.png",
//     alt:"peli4 ", 
//     class:"peli"


//   },{
//     src: "../../../assets/pasarelrato/5.png",
//     alt:"peli5 ",
//     class:"peli"
//   }]


// }

}