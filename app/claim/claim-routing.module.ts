import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {ClaimComponent} from "./claim.component";
import {ImpactComponent} from "./impact/impact.component";
import {CameraComponent} from "./camera/camera.component";

const routes: Routes = [
    {path: "", component: ClaimComponent},
    {path: "impact", component: ImpactComponent},
    {path: "camera", component: CameraComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ClaimRoutingModule {
}
