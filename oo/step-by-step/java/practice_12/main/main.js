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
        if (stud.klass == this)
            this.Leader = stud.name;
        else
            console.log('It is not one of us.');
    }

    appendMember(stud) {
        stud.klass = this;
    }

    isIn(stud) {
        if (stud.klass == this) {
            return true;
        }
        else {
            return false;
        }
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
    constructor(name, age, id, classes) {
        super(name, age, id);
        this.classes = classes;
    }

    introduce() {
        if (typeof(this.classes) != 'undefined' && this.classes.length > 1) {
            let L = [];
            for (let item of this.classes) {
                L.push(item.number);
            }
            return super.introduce() + ` I am a Teacher. I teach Class ${this.classes}.`;
        }
        else {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }
    }

    isTeaching(stud) {
        if (typeof this.klass != 'undefined') {
            for (let item of this.classes) {
                if (item == stud.klass) {
                    return super.introduce() + ` I am a Teacher. I don't teach ${stud.name}.`;
                }
            }
        }
        return super.introduce() + ` I am a Teacher. I teach ${stud.name}.`;
    }

    hasJoin(stud, klass) {
        return `I am ${this.name}. I know ${stud.name}} has joined Class ${klass.number}.`;
    }

    hasLeader(stud, klass) {
        return `I am ${this.name}. I know ${stud.name} become Leader of Class ${klass.number}.`;
    }
}