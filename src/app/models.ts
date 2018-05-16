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

export class NatureMission {

    constructor(
        public libelle?: string,
        public estFacturee?: boolean,
        public versementPrime?: boolean,
        public tjm?: string,
        public pourcentagePrime?: string,
        public dateFin?: Date
    ) { }
}

export class LigneDeFrais {
    constructor(
        public id?: string,
        public date?: string,
        public nature?: string,
        public montant?: string
    ) { }
}

export class MissionDetailsFrais {
    constructor(
        public id?: string,
        public estEchue?: boolean,
        public dateDebut?: string,
        public dateFin?: string,
        public nature?: string,
        public villeDepart?: string,
        public villeArrivee?: string,
        public transport?: string,
        public estimationPrime?: string,
        public montantFrais?: string,
        public status?: string
    ) {
        this.montantFrais = "0";
     }
}

export class NoteDeFrais {
    constructor(
        public id?: string,
        public items?: LigneDeFrais[]
    ) { }
}