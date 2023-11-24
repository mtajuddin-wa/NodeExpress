function Person(name, age, lan) {
    this.name = name;
    this.age = age;
    this.lan = lan;
}

const person = new Person('John', 34, ['English', 'Hindi']);
console.log(person);
person.lastName = 'Elton';
console.log(person);