// Se crea un nuevo componente llamado ListadoComponent de manera automática. Por consola (luego de hacer un cd con
// la carpeta de la aplicación) o en la terminal de Visual Studio Code escribo: ng generate component NOMBRE+PASS
// donde se va a crear el nuevo componente (para este ejemplo: heroes/listado) y le doy enter. Luego de hacer esto 
// se crean 4 archivos: "listado.component.ts", "listado.component.html", "listado.component.css" y 
// "listado.component.spec.ts"; y además se actualiza el módulo (en este caso es el archivo "app.module.ts") con la
// importación de "ListadoComponent" (hace la importación de manera automática y a su vez la coloca en las
// declaraciones => ver archivo).

// En el archivo "app.component.html" voy a colocar <app-listado></app-listado>, comentar lo demás y guardar los 
// cambios. En el navegador web se puede ver lo que correspondiente al archivo "listado.component.html".

// Hay varias cosas y archivos que no se ocupan. Más adelante se aprenderá ciertas banderas que se pueden mandar al
// comando de Angular para poder definir cuales son los archivos que nos interesan.

// Por ejemplo, yo no necesito el archivo de estilos ("listado.component.css"), se puede simplemente borrarlo. No 
// quiero archivo de pruebas ("listado.component.spec.ts"), también se puede borrar. Me quedo solo con el listado 
// HTML y el componente de TypeScript.

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css'] Como yo borre el archivo CSS que es requerido acá, si no elimino esta
  // línea de código me da error.
})

// Otra cosa que se crea de forma automática es la implementación del OnInit{...}, junto con su constructor() y su
// ngOnInit(). Esto son ciertos métodos que Angular dispara de manera automática y por el momento simplemente lo 
// borramos (se verá más adelante cuando se analice el ciclo de vida). Lo borramos tanto dentro de la clase como en 
// la importación que viene del '@angular/core'.

export class ListadoComponent {
[x: string]: any;

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América']; // Defino un arreglo de string
  // (arreglo o listado de héroes).
  heroeBorrado: string = ''; // Defino una nueva propiedad que me sirva para mostrar luego el héroe borrado de mi
  // lista de héroes. La inicializo con un string vacío.

  borrarHeroe() {
  
    this.heroeBorrado = this.heroes.shift() || '';
    /* El método shift() elimina el primer elemento de un arreglo y lo devuelve. Si el arreglo está vacío, se devuelve
    undefined y el arreglo no se modifica. Para recuperar el elemento removido y mostrarlo tanto por consola como en
    el navegador web, lo que hago es utilizar la propiedad definida como "heroeBorrado". La propiedad "heroeBorrado"
    es siempre de tipo string, entonces para evitar un error cuando el arreglo está vacío y se devuelve undefined, lo
    que se hace es utilizar el operador lógico or (||) para devolver un string vacío cuando no hay nada más para
    borrar (es decir cuando el arreglo esté vacío y se devuelve undefined, ya que el string vacío le "gana" al 
    undefined). */
    console.log('El héroe borrado es: ', this.heroeBorrado);

    /* this.heroes = []; Puedo inicializar el arreglo "heroes" a un arreglo vacío y cuando oprimo el botón borrar
    se borra toda la lista de héroes. */
  
    /* Utilizar aquí el "this" es necesario porque necesito hacer referencia a la propiedad de la clase. Necesito
  apuntar a la instancia del ListadoComponent mediante el "this" lo cual me va indicar el valor actual. */ 

  }

}

