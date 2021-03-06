'use strict'
class Persion{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Persion{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+` I am a Student. I am at Class ${this.klass}.`;
    }
}

class Worker extends Persion{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return super.introduce()+` I am ${this.age} years old. I am a Worker. I have a job.`;
    }
}