'use strict'
class Persion {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Class {
    constructor(number) {
        this.number = number;
    }
}
class Student extends Persion {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Student. I am Leader of Class ${this.klass.number}.`;
    }
}

class Teacher extends Persion {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (typeof this.klass !== 'undefined')
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
    }

    introduceWith(stud) {
        if (typeof this.klass === 'undefined' || this.klass.number !== stud.klass.number) {
            return super.introduce() + ` I am a Teacher. I don't teach ${stud.name}.`;
        }
        else
            return super.introduce() + ` I am a Teacher. I teach ${stud.name}.`;
    }
}