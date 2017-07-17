'use strict';
describe('main', () => {

    it('should print text', () => {
        let man=new Persion('Tom',21);
        expect(man.introduce()).toBe('My name is Tom. I am 21 years old.');
    });

    it('should print text', () => {
        let man=new Student('Tom',21,2)
        expect(man.introduce()).toBe('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
    });
});
