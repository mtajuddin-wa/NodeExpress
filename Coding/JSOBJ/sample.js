const person = {
    firstName : 'John',
    lastName : 'Elton',
    age : 25,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};  

person.college = 'IT';
console.log(person);
console.log(person['firstName']);
console.log(person.fullName());

Object.values(person).forEach((value) => {
    console.log(value);
});