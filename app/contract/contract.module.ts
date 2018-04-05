import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {ContractRoutingModule} from "./contract-routing.module";
import {ContractComponent} from "./contract.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContractRoutingModule,
        SharedModule
    ],
    declarations: [
        ContractComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContractModule {
}
