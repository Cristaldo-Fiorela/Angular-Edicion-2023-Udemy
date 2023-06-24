import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { DbzModule } from "../dbz/dbz.module";

@NgModule({
    declarations: [ // aquí se declaran los componentes, directivas y pipes que pertenecen a este módulo
        HeroComponent,
        ListComponent
    ],
    exports:[ // cosas que que se exportan para utilizar externamente del modulo
        HeroComponent,
        ListComponent
    ],
    imports: [ // cosas que se importan para utilizar en el modulo
        CommonModule,
        DbzModule
    ]
})
export class HeroesModule {}