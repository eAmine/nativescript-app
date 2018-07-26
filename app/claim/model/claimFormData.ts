export class ClaimFormData {
    public nature: number = null;
    public lossDate: string = "";
    public lossTime: string = "";
    public description: string = "";
    public isThirdPartyPresent: boolean = false;
    public circumstance: string = "";

    clear() {
        this.nature = null;
        this.lossDate = '';
        this.lossTime = '';
        this.description = '';
        this.isThirdPartyPresent = false;
        this.circumstance = '';
    }
}
