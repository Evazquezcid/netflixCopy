import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavInterface } from '../../models/filmsInterfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navInfo:  NavInterface;

  constructor() {

    this.navInfo = {
      logo: {

        src:"../../../assets/LOGO/lopersonalizado.png" ,
        alt: "Logo",
        class:"logo"

      },

      links: [{

        text:"Inicio",
        link : "#inici0"

      },{

        text:"Series Tv",
        link : "#Series"

      },{

        text:"Peliculas",
        link : "#peliculas"

      },{

        text:"Novedades más vistas",
        link : "#novedadesmasvistas"

      },{

        text:"Mi lista",
        link : "#lista"

      },{

        text:"Iniciar sesion",
        link : "#iniciarsesion"

      },{

        text:"Buscar",
        link : "#buscar"

      },{

        text:"🔔",
        link : "#notificaciones"

      }]
      // public modonoche(): void {
      //   document.body.classList.toggle("ligth-theme");
      //   this.btnText === "☀️" ? this.btnText = "🌙" : this.btnText = "☀️"
      // }



    }


   }

  ngOnInit(): void {
  }

  

}
