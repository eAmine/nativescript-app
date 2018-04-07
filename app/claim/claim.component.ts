import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {ClaimEvent} from "./model/ClaimEvent";
import {Nature} from "./model/nature";
import {ImageAsset} from "tns-core-modules/image-asset/image-asset";
import {ClaimFormDataService} from "./service/claim.service";
import {RouterExtensions} from "nativescript-angular/router";
import {RadDataFormComponent} from "nativescript-ui-dataform/angular";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
    selector: "Claim",
    moduleId: module.id,
    templateUrl: "./claim.component.html"
})
export class ClaimComponent implements OnInit, OnDestroy {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
    public saveToGallery: boolean = true;
    public cameraImage: ImageAsset;
    public showChatBubble: boolean = false;
    private _natures: Array<Nature>;
    private subscription: Subscription;
    private timer: Observable<any>;

    constructor(private routerExtensions: RouterExtensions, private formDataService: ClaimFormDataService) {
    }

    private _natureNames: Array<string>;

    get natureNames() {
        if (!this._natureNames) {
            this._natureNames = this._natures.map((value: Nature) => value.name);
        }
        return this._natureNames;
    }

    private _claimEvent: ClaimEvent;

    get claimEvent(): ClaimEvent {
        return this._claimEvent;
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
        this._claimEvent = this.formDataService.getClaimEvent();
        this._natures = new Array<Nature>();
        this._natures.push(new Nature(1, "Accident"));
        this._natures.push(new Nature(2, "Vol et vandalisme"));
        this._natures.push(new Nature(3, "Incendie"));
        this._natures.push(new Nature(4, "Bris de Glace"));
        this._natures.push(new Nature(5, "Autre"));
        this.setTimer();
    }

    goToNext() {
        this.myCommitDataFormComp.dataForm.commitAll();
        this.formDataService.setClaimEvent(this._claimEvent);
        this.routerExtensions.navigate(["/claim/impact"]);

    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
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
        this.showChatBubble = false;
        this.timer = TimerObservable.create(3000, 1000);// 5000 millisecond means 5 seconds
        this.subscription = this.timer.subscribe(() => {
            // set showloader to false to hide loading div from view after 5 seconds
            this.showChatBubble = true;
        });
    }
}
