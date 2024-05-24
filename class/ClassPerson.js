import ClassJob from "./ClassJob.js"

export default class ClassPerson extends ClassJob {

    constructor() {
        super()
    }

    setPerson(name, age) {
        this.name = name
        this.age = age
    }

    getEmpresa() {
        return 'get empresa da ClassPerson'
    }


    getData() {
        return this.name+ ' possui '+ this.age+ ' e trabalha na empresa '+ this.getEmpresa()
    }

}