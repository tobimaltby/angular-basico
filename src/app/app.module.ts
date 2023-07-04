/* Este archivo es nuestro módulo principal. Este es el módulo que es cargado en el archivo "main.ts" y por ello
es el módulo principal. Siempre el "app.module.ts" es el módulo principal de nuestra aplicación. Aquí se pueden
observar componentes principales como lo es el AppComponent, y además otros componentes que no son principales 
para la aplicación pero si son importantes para que funcione la misma, aunque no deben mostrarse cuando la aplicación
se carga, nos referimos por ejemplo al ContadorComponent, HeroeComponent y ListadoComponent. */

/* Imaginemos una aplicación que contenga 100 componentes, lo cual significaría 100 líneas de importaciones justo
aquí abajo. Además se tendrían 100 líneas dentro de las "declarations" para declarar cada uno de los componenetes
que serían usados en su módulo principal o en la aplicación. Por lo tanto, el objetivo de los módulos es agrupar
componentes y piezas de nuestra aplocación que tienen relación entre sí. Por ejemplo, es probable, que más adelante
sigamos trabajando y modificando nuestro ContadorComponent y expandiendo cosas dentro del directorio heroes. Por lo 
cual, siempre es bueno agrupar por módulos de manera que sea más fácil expandir sus funcionalidades o añadir
componentes, sin la necesidad de venir hasta este archivo y que las "declarations" crezcan descontroladamente. */

/* Hay varias objetivos que cumplen los módulos, uno de ellos es encapsular las cosas y otro principal es ayudar con
carga perezosa. Es decir, podemos cargarlos en nuestra aplicación sólo cuando los necesitemos usar (a demanda). */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /* Esto es porque estamos trabajando en un navegador web. */

import { AppComponent } from './app.component'; /* Se importa el AppComponent y se coloca más abajo en las 
declaraciones de los componentes que se están utilizando. */
/* import { ContadorComponent } from './contador/contador/contador.component'; // Se importa el ContadorComponent y se
// coloca más abajo en las declaraciones de los componentes que se están utilizando. */
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
/* import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component'; // Esta importación se hizo de manera
// automática cuando se creo el ListadoComponent. También se definió de manera automática en las declaraciones (ver
// más abajo). */

@NgModule({ // Este es el decorador de mi clase. Es especial porque recibe información obligatoria. Las
// "declarations" donde se colocan los componentes, los "imports" donde se colocan otros módulos, los "providers"
// que son como servicios específicos a un módulo, y el "bootstrap" donde va el componente principal (el componente
// que quiero lanzar primero).
  declarations: [ // Estas declaraciones corresponden a los componentes que se están utilizando.
    AppComponent, // Se define el AppComponent y por eso funciona sin ningún problema.
    /* ContadorComponent, // Se define el ContadorComponent para que funcione mi "app-contador". */
    /* HeroeComponent, // Se define el nuevo componente HeroeComponent para que funcione mi "app-heroe". Debemos
    // asegurarnos también de importarlo.
    ListadoComponent */
  ],
  imports: [
    BrowserModule,
    HeroesModule, /* Importo el módulo correspondiente al componente que se encarga de mostrar el listado de héroes 
    a través del navegador web. */
    ContadorModule /* Defino dentro de las importaciones del módulo principal, el módulo correspondiente al
    ContadorComponent. */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Casi todo en Angular son sólo clases.
