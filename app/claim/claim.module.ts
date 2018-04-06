import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {ClaimRoutingModule} from "./claim-routing.module";
import {ClaimComponent} from "./claim.component";
import {NativeScriptUIDataFormModule} from "nativescript-ui-dataform/angular";
import {ClaimFormDataService} from "./service/claim.service";
import {ImpactComponent} from "./impact/impact.component";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CameraComponent} from "./camera/camera.component";
import {TNSCheckBoxModule} from "nativescript-checkbox/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ClaimRoutingModule,
        NativeScriptUIDataFormModule,
        SharedModule, NativeScriptRouterModule, TNSCheckBoxModule
    ],
    providers: [{provide: ClaimFormDataService, useClass: ClaimFormDataService}],
    declarations: [
        ClaimComponent, ImpactComponent, CameraComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ClaimModule {
}
