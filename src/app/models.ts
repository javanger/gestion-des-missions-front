export class Nature {

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
        public nature?: string,
        public date?: string,
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
        public montantFrais?: string
    ) {}
}