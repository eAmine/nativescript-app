import {Component, OnInit, ViewChild} from "@angular/core";
import {requestPermissions, takePicture} from "nativescript-camera";
import {ImageSource} from "tns-core-modules/image-source";
import {ImageAsset} from "tns-core-modules/image-asset";
import {layout} from "tns-core-modules/utils/utils";
import * as app from "tns-core-modules/application";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RouterExtensions} from "nativescript-angular";
import {ClaimFormDataService} from "../service/claim.service";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import {TNSFancyAlert} from "nativescript-fancyalert";

@Component({
    selector: "Camera",
    moduleId: module.id,
    templateUrl: "./camera.component.html"
})
export class CameraComponent implements OnInit {
    /* ***********************************************************
   * Use the @ViewChild decorator to get a reference to the drawer component.
   * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
   *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    public saveToGallery: boolean = true;
    public cameraImage: ImageAsset;

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

    onTakePictureTap(args) {
        requestPermissions().then(
            () => {
                takePicture({width: 300, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery})
                    .then((imageAsset: any) => {
                        this.cameraImage = imageAsset;

                        // if you need image source
                        let source = new ImageSource();
                        source.fromAsset(imageAsset).then((source) => {
                            let width = source.width;
                            let height = source.height;
                            if (app.android) {
                                // the android dimensions are in device pixels
                                width = layout.toDeviceIndependentPixels(width);
                                height = layout.toDeviceIndependentPixels(height);
                            }

                            console.log(`Size: ${width}x${height}`);
                        });
                    }, (error) => {
                        console.log("Error: " + error);
                    });
            },
            () => alert("permissions rejected")
        );
    }

    goToPrevious(form: any) {

        // Navigate to the work page
        this.routerExtensions.navigate(["/claim/impact"]);

    }

    save() {
        TNSFancyAlert.showSuccess("Sinistre : S20180812", "Votre déclaration a été prise en compte", "Retour");
        this.routerExtensions.navigate(["/claim/list"]);
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

    onNotificationButtonTap(): void {
        this.routerExtensions.navigate(["/contract/paydrive"], {
            transition: {
                name: "fade"
            }
        });
    }
}