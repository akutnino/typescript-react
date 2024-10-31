// Inference & Explicit Type Annotations
var userName = 'Nino';
console.log(userName);
// Basic Primitive Types
var firstName = 'Nino';
var age = 23;
var isMale = true;
var bigNum = 9123412999999999993412341234n;
var nulls = null;
var undefine = undefined;
var mySymbol = Symbol('name');
console.log(mySymbol.description);
// Combining Types: Union Types
var userID = 'hello';
userID = 100;
console.log(userID);
// Object Types
var userOne = {
    name: 'Nino',
    age: 23,
    isAdmin: true,
    id: 123,
};
var userTwo;
userTwo = {
    firstName: 'Louis',
    userAge: 23,
    isMale: true,
    userID: 'abc',
};
console.log(userTwo);
// Array Types
var myHobbies = ['Sports', 'Cooking', 'Reading'];
var myNames = ['Nino', 'Louis', 'Aranas', 'Akut'];
var allCaps = myHobbies.map(function (name) { return name.toUpperCase(); });
console.log(allCaps);
