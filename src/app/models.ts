export class Nature {

    libelle: string;
    estFacturee: boolean;
    versementPrime: boolean;
    tjm: string;
    pourcentagePrime: string;
    dateFin: Date;

    constructor(obj: any) {
        Object.assign(this, obj);
    }


}