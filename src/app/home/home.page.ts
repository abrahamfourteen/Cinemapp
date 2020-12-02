import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  peliculas = []; /*[
    {
      titulo: "Spider Man",
      anio: 2002,
      director: "Sam Raimi",
      imagen: "https://images-na.ssl-images-amazon.com/images/I/71piCu%2BSGQL._AC_SL1434_.jpg"
    },
    {
      titulo: "Iron Man",
      anio: 2008,
      director: "Jon Favreau",
      imagen: "https://i.blogs.es/7ccbec/iron-man/1366_2000.jpg"
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {

  }

  ngOnInit() {
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    // this.peliculasService.getPeliculas();
  }
}
