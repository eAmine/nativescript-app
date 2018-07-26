import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {SelectedIndexChangedEventData, TabView} from "tns-core-modules/ui/tab-view";
import {RouterExtensions} from "nativescript-angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Feedback} from "nativescript-feedback";
import {Color} from "tns-core-modules/color";

@Component({
    selector: "Contract",
    moduleId: module.id,
    templateUrl: "./contract.component.html",
    styleUrls: ["./contract.component.scss"]
})
export class ContractComponent implements OnInit, OnDestroy {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    public showChatBubble: boolean = false;
    private subscription: Subscription;
    private timer: Observable<any>;
    private feedback: Feedback;

    constructor(private routerExtensions: RouterExtensions) {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
        this.setTimer();
    }

    private _sideDrawerTransition: DrawerTransitionBase;

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
        }
    }

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.feedback = new Feedback();
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
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

        if (args.newIndex == 3) {
            this.goToClaim();
        }
    }

    goToClaim(): void {
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

    ngOnDestroy() {
        if (this.subscription && this.subscription instanceof Subscription) {
            this.subscription.unsubscribe();
        }
    }

    setTimer() {
        // set showloader to true to show loading div on view
        this.showChatBubble = true;
        this.timer = TimerObservable.create(1000, 1000);
        if (this.showChatBubble) {
            this.subscription = this.timer.subscribe(() => {
                this.showCustomIcon();
                this.subscription.unsubscribe();
            });
        }
    }

    showCustomIcon(): void {
        this.feedback.show({
            title: "Pay as I drive",
            message: "Consultez votre solde sur l'espace pay as I drive",
            duration: 6000,
            backgroundColor: new Color("#281644"),
            icon: "paid", // in App_Resources/platform folders
            onTap: () => {
                console.log("showCustomIcon tapped");
            }
        });
        this.showChatBubble = false;
    }
}
