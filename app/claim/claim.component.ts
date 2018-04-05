import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {ClaimEvent} from "./model/ClaimEvent";
import {Nature} from "./model/nature";

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
    private _natures: Array<Nature>;
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
        this._claimEvent = new ClaimEvent();
        this._claimEvent.natureCode = null;
        this._claimEvent.lossDate = "";
        this._claimEvent.lossTime = "";
        this._claimEvent.description = "";
        this._claimEvent.circumstance = "";
        this._claimEvent.isThirdPartyPresent = false;
        this._natures = new Array<Nature>();
        this._natures.push(new Nature(1, "Accident"));
        this._natures.push(new Nature(2, "Vol et vandalisme"));
        this._natures.push(new Nature(3, "Incendie"));
        this._natures.push(new Nature(4, "Bris de Glace"));
        this._natures.push(new Nature(5, "Autre"));

    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onTap() {
        //this.myCommitDataFormComp.dataForm.commitAll();

        alert(
            {
                title: "Registration Details",
                message: this._claimEvent.toString(),
                okButtonText: "OK"
            });
    }
}
