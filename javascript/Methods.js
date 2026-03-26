class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log('hello,my name is $(this.name}');
    }
    }
    const person=new Person('bob',25);
    person.greet();
