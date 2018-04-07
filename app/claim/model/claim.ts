export class Claim {
    public num: string;
    public icon: string;
    public description: string;

    constructor(num: string, icon: string, description: string) {
        this.num = num;
        this.icon = icon;
        this.description = description;
    }
}