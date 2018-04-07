import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";

import {MyDrawerItemComponent} from "./my-drawer-item/my-drawer-item.component";
import {MyDrawerComponent} from "./my-drawer/my-drawer.component";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
