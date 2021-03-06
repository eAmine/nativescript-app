import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {InfosComponent} from "./infos/infos.component";
import {DocsComponent} from "./docs/docs.component";
import {CouriersComponent} from "./couriers/couriers.component";
import {SharedModule} from "../shared/shared.module";
import {ContractRoutingModule} from "./contract-routing.module";
import {ContractComponent} from "./contract.component";
import {PayDriveComponent} from "./paydrive/paydrive.component";
import {NativeScriptRouterModule} from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContractRoutingModule,
        SharedModule, NativeScriptRouterModule
    ],
    declarations: [
        ContractComponent,
        InfosComponent,
        DocsComponent,
        CouriersComponent,
        PayDriveComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContractModule {
}
