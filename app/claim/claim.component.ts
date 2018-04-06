import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {ClaimEvent} from "./model/ClaimEvent";
import {Nature} from "./model/nature";
import {ImageAsset} from "tns-core-modules/image-asset/image-asset";
import {ClaimFormDataService} from "./service/claim.service";
import {RouterExtensions} from "nativescript-angular/router";
import {RadDataFormComponent} from "nativescript-ui-dataform/angular";

@Component({
    selector: "Claim",
    moduleId: module.id,
    templateUrl: "./claim.component.html"
})
export class ClaimComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
    public saveToGallery: boolean = true;
    public cameraImage: ImageAsset;
    private _natures: Array<Nature>;

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
}
