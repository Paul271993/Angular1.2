import { Component, OnInit } from '@angular/core';
import { Gato } from 'src/app/models/gato';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public miGato: Gato
  public miColor: String

  constructor() { 
    this.miGato = {
      nombre: "Michi",
      raza: "Booleana",
      edad: 1,
      biografia: "Nació, y al cabo de un año lo abandonaron. Adóptalo CONCHETUMADRE!",
      
    }

    this.miColor = "red"


  }



// mostrarNombre():string
// {
//   return this.miGato.mostrarNombre();
// }

enviar(nuevoNombre: HTMLInputElement)
{
  // console.log(this.miGato.nombre);
  this.miGato.nombre = nuevoNombre.value;
  // console.log(this.miGato.nombre);
}


  
cambiarModo() { 
  var cuerpoweb = document.body; 
  cuerpoweb.classList.toggle("oscuro"); 
}


  ngOnInit(): void {
  }

}


