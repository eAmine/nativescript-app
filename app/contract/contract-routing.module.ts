import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {ContractComponent} from "./contract.component";
import {PayDriveComponent} from "./paydrive/paydrive.component";

const routes: Routes = [
    {path: "", component: ContractComponent},
    {path: "paydrive", component: PayDriveComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ContractRoutingModule {
}
