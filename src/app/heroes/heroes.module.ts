/* La idea con este archivo es crear un módulo que nos permita agrupar todo lo relacionado a héroes y es por ello que
se lo crea dentro del directorio "heroes". En principio, se hace de manera manual pero luego para otros módulos se 
utiliza la forma automática. El módulo siempre se llama de igual manera que el nombre del directorio que lo contiene,
además de especificar que es un módulo (module) de TypeScript (.ts) */

/* Este módulo luce de manera similar al módulo de mi aplicación ("app.module.ts"): */

import { NgModule } from '@angular/core'; // Se importa desde angular/core el módulo de Ng.
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';


@NgModule({ // Necesito utilizar el decorador importado. Abro y cierro llaves para su configuración.
    declarations: [ /* Los módulos tienen una pieza fundamental que son las declaraciones. Las declaraciones son un 
    arreglo y por eso se definen entre llaves cuadradas. En las declaraciones básicamente se definen las cosas que
    tiene este módulo, por ejemplo que componentes, que pipes, etc. En este caso, las declaraciones van a ser los
    componentes que tengo dentro del directorio heroes. Aquí se declaran los componentes. */
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ /* Otra pieza fundamental de los módulos son las exportaciones. Las exportaciones básicamente son
    los componentes que yo quiero que sean visibles fuera de este módulo. Todo lo que está definido dentro de las
    declaraciones está invisible para toda la aplicación, exceptuando los componentes que estén definidos dentro de las
    exportaciones. En este caso, si observamos el archivo "app.component.html", lo que se tiene ahí está por fuera del
    encapsulado. Por ejemplo, si se quiere utilizar el "app-listado" en el archivo "app.component.html", se tiene que
    poner en las exportaciones. */
        ListadoComponent
    ],
    imports: [ /* Dentro de las importaciones se colocan usualmente sólo módulos. El "BrowserModule" importado en el
    archivo "app.module.ts" no hace falta volver a importarlo aquí.  */
        CommonModule /* Se importa el módulo "CommonModule" el cual nos permite utilizar las directivas estructurales
        (*ngIf y *ngFor) en la aplicación. Si no se importa este módulo, se genera un error en el archivo
        "listado.component.html" que es donde se utilizan las directivas. Este módulo ofrece las directivas
        personalizadas de Angular pero también otras cosas. */
    ]

})

/* Luego de configurar el decorador, en teoría ya está terminado el módulo. Resta hacer las modificaciones
correspondientes en el módulo principal de mi aplicación ("app.module.ts"). Como aquí ya tenemos importados y
declarados los componentes HeroeComponent y ListadoComponent, deben borrarse del módulo principal (tanto en las
importaciones de arriba como en las declaraciones del decorador). Además, otra cosa importarte que debe hacerse es
definir dentro del decorador del módulo principal, más precisamente dentro de las importaciones del mismo, el módulo
correspondiente al componente encargado de mostrar el listado de héroes (VER ARCHIVO). Por ejemplo, el "app-listado" 
que estoy utilizando en el archivo HTML y corresponde a este HeroesModule (está definido en este módulo), debo
importarlo en el módulo principal (dentro de "imports") para que sea visible a lo largo de mi aplicación. La ventaja
de hacer esto es que ahora un módulo HeroesModule y cuando se tenga que trabajar con cualquier cuestión de "heroes" 
se hace directamente desde este módulo, sin modificar en lo absoluto nuestro módulo principal AppModule. Esto permite
trabajar de manera MODULAR. */

export class HeroesModule { /* En Angular todo es una clase. Se la exporta para poder utilizarla fuera de este archivo.
Para nombrarla utilizo el mismo nombre del archivo. */
   
}

