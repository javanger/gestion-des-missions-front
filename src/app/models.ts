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
        public date?: Date,
        public montant?: number
    ) { }
}