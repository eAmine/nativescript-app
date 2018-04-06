import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { RouterExtensions } from "nativescript-angular/router";
//import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { registerElement } from 'nativescript-angular';
import * as dockModule from "tns-core-modules/ui/layouts/dock-layout";

import { NgShadowModule } from 'nativescript-ng-shadow';

//registerElement('BottomBar', () => BottomBar);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

	/* public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;

	public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Home", "homeicon", "black"),
        new BottomBarItem(1, "Calendar", "homeicon", "#1083BF"),
        new BottomBarItem(2, "Profile", "homeicon", "pink"),
        new BottomBarItem(3, "Message", "homeicon", "green")
    ]; */

	constructor(private routerExtensions: RouterExtensions) {}

    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
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

	/* bottomBarLoaded(event) {
        console.log("bottomBarLoaded");
		console.log("this.hidden : " + this.hidden);
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.ALWAYS_SHOW;
        this.inactiveColor = "red";
        this.accentColor = "deepskyblue";
		console.log("this.hidden : " + this.hidden);
		console.log("this.titleState : " + this.titleState);
		console.log("this.inactiveColor : " + this.inactiveColor);
		console.log("this.accentColor : " + this.accentColor);
    }

	tabSelected(args: SelectedIndexChangedEventData) {
        // only triggered when a different tab is tapped
        console.log(args.newIndex);
    } */
}
