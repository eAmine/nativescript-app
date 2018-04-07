import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {ClaimFormDataService} from "../service/claim.service";
import {RouterExtensions} from "nativescript-angular/router";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

@Component({
    selector: "ClaimList",
    moduleId: module.id,
    templateUrl: "./list.component.html"
})
export class ClaimListComponent implements OnInit, OnDestroy {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    public showChatBubble: boolean = false;
    private subscription: Subscription;
    private timer: Observable<any>;

    constructor(private routerExtensions: RouterExtensions, private formDataService: ClaimFormDataService) {
        this.setTimer();
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

    ngOnDestroy() {
        if (this.subscription && this.subscription instanceof Subscription) {
            this.subscription.unsubscribe();
        }
    }

    setTimer() {
        // set showloader to true to show loading div on view
        this.showChatBubble = false;
        this.timer = TimerObservable.create(8000, 1000);// 5000 millisecond means 5 seconds
        this.subscription = this.timer.subscribe(() => {
            // set showloader to false to hide loading div from view after 5 seconds
            this.showChatBubble = true;
        });
    }
}