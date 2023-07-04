
import { Component } from '@angular/core'; // Tenemos una importación del decorador "Component" (componente) que
// viene de "angular core".

// El decorador "Component" tiene varias propiedades internas. Este decorador requiere un argumento el cual es
// un objeto dichas propiedades internas. Este componente necesita que por lo menos especifiquemos 2 de estas
// propiedades, una es el "selector" que es el nombre que este componente va a tener (en este caso "app-root", 
// porque es la aplicación principal), y la otra es el "template" donde se establece si tiene una contraparte en
// HTML.

@Component({
  
  selector: 'app-root', // Si abrimos el archivo "index.html" vemos que dice "app-root" y eso no es coincidencia,
  // puesto que este es el nombre de este componente. Muestra el componente que figura en el título (ver más 
  // abajo), aunque no lo hace directamente sino pasando por varios procesos.
  
  templateUrl: 'app.component.html',

// Por un lado tenemos en "templateURL" que nos permite especificar el "PASS" en donde se encuentra el archivo.html 
// el cual va a ser utilizado para mostrar la información almacenada en él (código HTML que construye la página de
// bienvenida de nuestro proyecto, es decir la aplicación inicial). En pocas palabras, necesito especificar
// el archivo.html que en este ejemplo sería el archivo "app.component.html". Si vemos la información que contiene
// este archivo podemos observar que se corresponde con lo que muestra nuestra aplicación inicial.

// A diferencia, el "template" nos permite definir un template literal o un string que se quiera mostrar, es decir
// en nuestra aplicación inicial se va a mostrar lo que nosotros escribamos directamente aquí. Por ejemplo mediante
// el "span":

  /* template: '<span>Tobías Maltby</span>', */

// Utilizando el "template" todo lo que se encuentre en el archivo "app.component.html" es completamente ignorado y
// hasta podría ser borrado. Otra manera de definir el "template" (esto ya es una cuestión de gustos) es mediante
// un "back tix" (entre comillas simples inclinadas), lo cual nos permite definir nuestro "template" como un
// string multi línea y así podemos ver tanto el código como la contraparte de Typescript en simultáneo. Por
// ejemplo:

  /* template: `
  <h1>Hola de Nuevo</h1>
  <h1>Chau</h1>
  `, */

  styleUrls: ['app.component.css'] // La propiedad "styleUrls" me permite especificar el "PASS" en donde se
  // encuentra el archivo.css utilizado para modificar los estilos que se van a aplicar únicamente al archivo
  // "app.component.html" o al componente propiamente (es decir al template de este archivo actual).

  // A cada "PASS" lo especificamos directamente (sólo con el nombre del archivo) puesto que cada archivo se
  // encuentra dentro del mismo directorio y en el mismo nivel. Si esto no fuera así, habría que especificar el
  // "PASS" completo de la carpeta en donde se encuentre.
  
})

export class AppComponent {
  /* public titulo: string = 'Contador App'; // Aquí tenemos el título con el nombre del proyecto (dice "bases" por defecto porque es el 
  //nombre del proyecto que yo le dí). Si yo quiero modificarlo y mostrar este título en la parte del HTML, además
  // de editarlo aquí lo que debo hacer es utilizar doble llave en el archivo "app.component.html" y colocar dentro
  // la propiedad que quiero mostrar, en este caso "título".

  // De manera muy sencilla se puede imprimir código que se tenga en las propiedades de la clase en el HTML. La 
  // doble llave no sólo sirve para imprimir valores de las propiedades, sino que se puede colocar cualquier 
  // expresión de JavaScript (suma de números o datos, un string o par de string, o simplemente cualquier cosa).

  // Realizar un contador utilizando Angular es muy fácil. Por el momento, vamos a trabajar sobre el archivo 
  // "app.component.ts" y en su contraparte del HTML ("app.component.html") ==> VER ARCHIVO "app.component.html".

  public numero: number = 10; // Creamos esta nueva propiedad a la cual podemos inicializarla con cualquier valor.
  
  public base: number = 5; // Tarea: crear una nueva propiedad lamada "base" de tipo number inicializada en
  // principio con cierto valor. Trabajando sobre el archivo "app.component.html" mostramos la base por
  // por el navegador web y además, tanto los botones como el incremento o decremento de nuestro acumulador, se
  // corresponderán con el valor de la base establecida.

  // Podemos cambiar un poco nuestro código para que sea más fácil de leer en la parte del temple, es decir en 
  // el archivo "app.component.html". Para ello, lo que se hace es implementar un método aquí, en el archivo 
  // "app.component.ts" (archivo de TypeScript):

  acumular (valor: number) {
    this.numero += valor; // Utilizar aquí el "this" es necesario porque necesito hacer referencia a la propiedad
    // de la clase. Necesito apuntar a la instancia del AppComponent mediante el "this" lo cual me va indicar
    // el valor actual. 
  } */

}
