// Existe un manera automática de crear un componente. La manera automática se analiza más adelante, primero es
// necesario comprender lo que hay que hacer para crear un componente lo cual servirá para salvar los errores de 
// la parte automática.

import { importProvidersFrom } from "@angular/core";

// Nosotros tenemos nuestro app.component tanto en la parte de TypeScript como en el HTML. Rara vez tendremos
// nuestro app.component como se puede ver en el archivo "app.component.html", a menos que la aplicación sea muy
// sencilla (como en este caso). Como yo voy a agregar más componentes a la aplicación, necesito mover todo el 
// código HTML a un componente especial. Lo que busco con esto, es crear una etiqueta personalizada (como puede
// verse en el "index.html", que es la forma de llamar al componente) que me sirva para renderizar toda mi lógica.
// Por ejemplo, si necesito en un futuro colocar mi contador en otro lugar, vuelvo a llamar a ese mismo componente.
// Ese componente va a mantener su estado.

// Entonces, para crear un componente de manera manual, lo primero que hago es crear un nuevo archivo dentro de la
// carpeta "app" llamado en nuestro ejemplo "contador.component.ts". Luego, defino la siguiente clase:

import { Component } from '@angular/core'; // Utilizo este decorador para transformar la clase en un componente
// propio de Angular.

@Component ({
    selector: 'app-contador', // Usualmente se antepone la palabra app para indicar que es personalizado, o sea algo
    // que se hizo en nuestra aplicación.
    template: ` <!-- El template se puede definir de las 2 maneras que analizamos anteriormente. En este caso, como
    no se quiere incrementar más la lógica o crear otro archivo, utilizo defino el template de manera "normal".
    Coloco aquí todo el contenido HTML de este contador, es decir corto toda la lógica establecida en el archivo
    "app.component.html" y lo pego a continuación: -->
    
        <h1> {{ titulo }} </h1> 

        <h3> La base es: <strong> {{ base }} </strong> </h3> 

        <button (click) = " acumular (base) "> + {{ base }} </button> 

        <span> {{ numero }} </span> 

        <button (click) = " acumular (-base) "> - {{ base }} </button>

    `
})
export class ContadorComponent { // Utilizo la palabra "export" porque la quiero utilizar en otros lugares fuera
// de este archivo.

// Lo que sigue es cortar desde el archivo "app.component.ts" todo lo que se encuentra dentro de la clase
// "AppComponent" y pegar ese código a continuación (este código ya no pertenece al "AppComponent", sino que
// pertenece al "ContadorComponent"):

    public titulo: string = 'Contador App';

    public numero: number = 10;
  
    public base: number = 5;

    acumular (valor: number) {
        this.numero += valor;
    }

}