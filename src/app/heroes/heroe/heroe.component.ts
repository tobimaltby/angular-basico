/* ACLARACIÓN IMPORTANTE: Algo fundamental para cualquier aplicación es el nombre de los directorios y archivos 
que se van a manejar en el proyecto. Es de buena práctica trabajar de manera modularizada, es decir, agrupar la
aplicación por módulos. Entonces, lo que se hace es crear un directorio por cada "módulo", como por ejemplo una
carpeta llamada "contador" donde se van a almacenar todos los archivos relacionados con contadores. */

/* ACLARACIÓN IMPORTANTE: usualmente no se trabaja dentro de los archivos "app.component", solo se utilizan para
definir cuestiones globales o cosas de muy alto nivel en mi aplicación. */

/* Se crea un nuevo componente manualmente para trabajar con información sobre unos héroes. Primero lo que hago
es definir un nuevo directorio llamado "heroes" en el cual se colocará todo lo relacionado con héroes. A su vez, 
dentro de esta carpeta, creo otro directorio llamado "heroe" dentro del cual voy a crear mi nuevo componente. 
Entonces, defino allí los nuevos archivos correspondiente: "heroe.component.ts" y "heroe.component.html".
 */

import { Component } from "@angular/core"; // Importamos el decorador "Component".

@Component ({ // Definimos el "Component" mediante el selector y el templateURL
    selector: 'app-heroe', // El selector es 'app' para indicar que es personalizado. Usualmente el selector lleva
    // el mismo nombre del componente sin la palabra component.
    templateUrl: 'heroe.component.html' // Utilizo un templateURL porque es un template que tengo en otro archivo.
    // Entonces especifico la ubicación de ese archivo. Me tengo que asegurar que tengo algo dentro de mi archivo 
    // "heroe.component.html"

})

export class HeroeComponent { // Creamos el nuevo componente. Dentro de esta clase podríamos tener nuestro
// constructor y todo lo que ocupemos.

    nombre: string = 'Ironman'; // Defino una nueva propiedad dentro de mi clase y la muestro como encabezado (ver
    //archivo "heroe.component.html"). También muestro el nombre como parte de una lista de descripción.
    edad: number = 45; // Defino la edad y también la muestro como parte de una lista de descripción.
    
    get nombreCapitalizado(): string { // Otra cosa interesante que tiene Angular es que me permite crear un "get" o
    // un "set" dentro de mi clase. Este "get" me permite crear una "propiedad" que será procesada cuando la llame
    // aunque se verá como una simple propiedad tal como es el nombre o la edad (no se ve como un método cuando la
    // llamo). Aunque tiene el mismo formato de un método, no lo es. Al utilizar "get" lo que hago es definir una nueva 
    // propiedad. Es por esto que cuando lo llamo en el archivo HTML coloco directamente su nombre sin paréntesis,
    // como se hace para el nombre y la edad que también son propiedades.
        return this.nombre.toUpperCase(); // Esto es lo que retorna cuando es llamada y procesada.
    }

    /* IMPORTANTE: Cuando se define una propiedad dentro de una clase, internamente va a tener un get y un set. El get
    básicamente me permite leer un valor, y con el set voy a establecer un valor a una propiedad y leerlo. Por ejemplo: */

    /* public _valor: string = 'Hola';
    public get valor() : string { 
        return this._valor;
    } */

    /* La función get me permite leer ese valor por lo cual debería de retornarlo. Otra cosa importante es que función
    get no recibe ningún argumento como parámetro, ya que esta función solamente lee un valor. */

    /* public set valor(v : string) {
        return this._valor = v;
    } */

    /* La función set obligatoriamente debe recibir un argumento, ya que ese argumento es el que se le asigna a la
    propiedad _valor. */

    obtenerNombre(): string { // Defino un nuevo método como parte de mi clase. Retorna un "string" (lo construyo 
    // por medio de las comillas, lo cual se conoce como un template). A este método lo voy a llamar en la lista
    // de descripción definida en el archivo "heroe.component.html".
        return `${ this.nombre } - ${ this.edad }`;
        // return this.nombre + ' - ' + this.edad;
    }

    // Defino un nuevo método para cambiar el nombre del héroe:
    cambiarNombre (): void { // Esta función no recibe ningún argumento ni tampoco retorna nada.
        this.nombre = 'Spiderman'; // IMPORTANTE: El uso de "this" hace referencia a la instancia del objeto. Es una
        // referencia que se crea cuando la función es llamada y no cuando es declarada. El valor de esa referencia
        // depende del lugar en la que esa llamada se realice. 
    }

    // Defino un nuevo método para cambiar la edad del héroe:
    cambiarEdad (): void { // Esta función no recibe ningún argumento ni tampoco retorna nada.
        console.log ('hey...');
        this.edad = 30; 
    }

}