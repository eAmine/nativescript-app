import {Component, OnInit} from "@angular/core";

@Component({
    selector: "Docs",
    moduleId: module.id,
    templateUrl: "./docs.component.html"
})
export class DocsComponent implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }

    onNotificationButtonTap(): void {
        this.routerExtensions.navigate(["/contract/paydrive"], {
            transition: {
                name: "fade"
            }
        });
    }
}
