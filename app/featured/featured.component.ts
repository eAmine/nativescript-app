import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    constructor(private routerExtensions: RouterExtensions) {
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

    onTapHomeTile(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }

    onHomeButtonTap(): void {
        console.log("tapped home button !");
        this.routerExtensions.navigate(["/home"], {
            transition: {
                name: "fade"
            }
        });
    }

    onEmergencyButtonTap(): void {
        console.log("onEmergencyButtonTap !");
    }

    onSupportButtonTap(): void {
        console.log("onSupportButtonTap");
    }

    onNotificationButtonTap(): void {
        console.log("onNotificationButtonTap");
    }

    onMenuButtonTap(): void {
        console.log("onMenuButtonTap");
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
