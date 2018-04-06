import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {isAndroid} from "platform";
import {SelectedIndexChangedEventData, TabView, TabViewItem} from "tns-core-modules/ui/tab-view";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "Contract",
    moduleId: module.id,
    templateUrl: "./contract.component.html",
	styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    
    private _title: string;

    constructor(private routerExtensions: RouterExtensions) {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }

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

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
        }
    }

    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    getIconSource(icon: string): string {
        // return isAndroid ? "" : "res://tabIcons/" + icon;
        return "";
    }

    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];

        this.title = selectedTabViewItem.title;
        
        if(args.newIndex == 3) {
            this.goToClaim();
        }
    }

    goToClaim(): void {
        console.log("aller vers tototototottt");
        this.routerExtensions.navigate(['/claim'], {
            transition: {
                name: "fade"
            }
        });
    }

	onMenuButtonTap(): void {
		console.log("onMenuButtonTap");
		this.drawerComponent.sideDrawer.showDrawer();
	}

	onHomeButtonTap(): void {
		console.log("tapped home button !");
		this.routerExtensions.navigate(["/home"], {
		    transition: {
		        name: "fade"
		    }
		});
	}
}
