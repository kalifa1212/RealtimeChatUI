export class User{
    
    constructor(public nom:string,
        public prenom:string,
        public email:string,
        public identifiant:string,
        public password:string,
        public dateDeNaissance:Date,
        public sujetPreferer?:string[],
    ){}
}