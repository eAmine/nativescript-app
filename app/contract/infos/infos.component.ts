import {Component, OnInit, ViewChild} from "@angular/core";
import {Policy} from "../../shared/policy/policy";

@Component({
    selector: "Infos",
    moduleId: module.id,
    templateUrl: "./infos.component.html",
	styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
    policy: Policy;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
       this.policy = new Policy();
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }
}
