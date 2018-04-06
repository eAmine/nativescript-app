import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {ClaimFormDataService} from "../service/claim.service";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "Impact",
    moduleId: module.id,
    templateUrl: "./impact.component.html"
})
export class ImpactComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    constructor(private routerExtensions: RouterExtensions, private formDataService: ClaimFormDataService) {
    }

    private _sideDrawerTransition: DrawerTransitionBase;

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    goToPrevious(form: any) {

        // Navigate to the work page
        this.routerExtensions.navigate(["/claim"]);

    }

    goToNext() {
        // Navigate to the work page
        this.routerExtensions.navigate(["/claim/camera"]);

    }

	onMenuButtonTap(): void {
		this.drawerComponent.sideDrawer.showDrawer();
	}

	onHomeButtonTap(): void {
		this.routerExtensions.navigate(["/home"], {
            transition: {
                name: "fade"
            }
        });
	}
}