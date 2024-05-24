import ClassJob from "./ClassJob"

export default class ClassPerson extends class ClassJob {

    constructor() {
        super()
    }

    setPerson(name, age) {
        this.name = name
        this.age = age
    }

    getData() {
        return 'O '+this.name+ ' possui'+ this.age+ ' e trabalha na empresa'+ super.getEmpresa()
    }

}