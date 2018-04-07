import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {SearchRoutingModule} from "./search-routing.module";
import {SearchComponent} from "./search.component";
import {NativeScriptRouterModule} from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule, NativeScriptRouterModule,
        SharedModule
    ],
    declarations: [
        SearchComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule {
}
