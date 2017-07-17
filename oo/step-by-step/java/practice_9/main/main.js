'use strict'
class Persion {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(stud) {
        this.Leader = stud.name;
    }
}
class Student extends Persion {
    constructor(name, age, id, klass) {
        super(name, age, id);
        this.klass = klass;
    }

    introduce() {
        if (this.klass.Leader == this.name)
            return super.introduce() + ` I am a Student. I am at Class ${this.klass.number}.`;
        else
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.klass.number}.`;
    }
}

class Teacher extends Persion {
    constructor(name, age, id, klass) {
        super(name, age, id);
        this.klass = klass;
    }

    introduce() {
        if (typeof this.klass != 'undefined')
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
    }

    introduceWith(student) {
        if (typeof this.klass == 'undefined' || this.klass.number != student.klass.number) {
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
        }
        else
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`;
    }
}