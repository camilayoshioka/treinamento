import Person from "./Person";

export default class Baby extends Person {
    constructor(){
        super();
    }
    
    chorar() {
        return super.comer() + " e chorou"
    }
}