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

class Student extends Persion {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (typeof this.klass !== 'undefined')
            return super.introduce() + ` I am a Student. I am at Class ${this.klass}.`;
    }
}

class Teacher extends Persion {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (typeof this.klass !== 'undefined')
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass}.`;
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
    }
}