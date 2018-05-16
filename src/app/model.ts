export class MonModel { 
    matricule:string; 
    passWord:string; 
 }

 export enum Role{
    ROLE_ADMINISTRATEUR = "ROLE_ADMINISTRATEUR", 
    ROLE_MANAGER = "ROLE_MANAGER", 
    ROLE_EMPLOYE = "ROLE_EMPLOYE"
}


 export class Utilisateur {   
    matricule:string; 
    nom:string;
    prenom:string
    role:Role; 

    constructor(obj:any) {
        Object.assign(this, obj)
    }
 }