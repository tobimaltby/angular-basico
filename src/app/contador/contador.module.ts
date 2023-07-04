/* Se crea un nuevo módulo para mi ContadorComponent. Antes de esto, se crea un nuevo directorio llamado "contador"
dentro de la carpeta que ya existía también llamada "contador". Voy a mover el archivo "contador.component.ts" dentro
de este nuevo directorio y con ello debo actualizar las importaciones correspondientes. De esta manera, este módulo
del contador queda almacenado en la carpeta contador madre (que es el contenedor del módulo). Por otro lado, en el 
archivo "app.component.html", voy a comentar la línea de código del "app-listado" y a quitar el comentario de la línea
de código del "app-contador" para poder observar el contador en el navegador web. Luego, solo hace falta remover la
línea de código correspondiente a la importación del ContadorComponent dentro del archivo "app.component.ts", como
así también remover el ContadorComponent de las declaraciones. */

import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [ /* En las declaraciones defino los componentes necesarios para el módulo del contador. */
        ContadorComponent /* Este es el único componente que este módulo tiene por ahora. */
    ],
    exports: [ /* En las exportaciones defino los componentes que quiero que sean visibles fuera de este módulo. */
        ContadorComponent
    ],
    imports: [ /* No es necesario importar el módulo "CommonModule" ya que no se utilizan directivas estructurales
    (*ngIf y *ngFor) en el template del ContadorComponent (ver archivo "contador.component.ts"). */

    ]

})

export class ContadorModule {

}

/* Por último, resta definir este nuevo módulo creado dentro de las importaciones del módulo principal de mi
aplicación (archivo "app.module.ts") con su respectiva línea de importación arriba => VER ARCHIVO. */