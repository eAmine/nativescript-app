import {Injectable} from "@angular/core";
import {ClaimFormData} from "../model/claimFormData";
import {ClaimEvent} from "../model/ClaimEvent";


@Injectable()
export class ClaimFormDataService {
    private claimFormData: ClaimFormData = new ClaimFormData();

    getClaimEvent(): ClaimEvent {
        var claimEvent: ClaimEvent = new ClaimEvent();
        claimEvent.natureCode = this.claimFormData.nature;
        claimEvent.lossDate = this.claimFormData.lossDate;
        claimEvent.description = this.claimFormData.description;
        claimEvent.lossTime = this.claimFormData.lossTime;
        claimEvent.isThirdPartyPresent = this.claimFormData.isThirdPartyPresent;
        claimEvent.circumstance = this.claimFormData.circumstance;
        return claimEvent;
    }

    setClaimEvent(claimEvent: any) {
        if (claimEvent == null) {
            console.log("null event");
        }
        else {
            console.log(claimEvent.circumstance);
        }

        this.claimFormData.nature = claimEvent.natureCode;
        this.claimFormData.lossDate = claimEvent.lossDate;
        this.claimFormData.description = claimEvent.description;
        this.claimFormData.lossTime = claimEvent.lossTime;
        this.claimFormData.isThirdPartyPresent = claimEvent.isThirdPartyPresent;
        this.claimFormData.circumstance = claimEvent.circumstance;

    }

    getClaimFormData(): ClaimFormData {
        // Return the entire Form Data
        return this.claimFormData;
    }

    resetClaimFormData(): ClaimFormData {
        // Return the form data after all this.* members had been reset
        this.claimFormData.clear();
        return this.claimFormData;
    }
}