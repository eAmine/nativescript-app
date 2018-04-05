import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {ClaimRoutingModule} from "./claim-routing.module";
import {ClaimComponent} from "./claim.component";
import {NativeScriptUIDataFormModule} from "nativescript-ui-dataform/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ClaimRoutingModule,
        NativeScriptUIDataFormModule,
        SharedModule
    ],
    declarations: [
        ClaimComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ClaimModule {
}
