// Inference & Explicit Type Annotations
let userName: string = 'Nino';
console.log(userName);

// Basic Primitive Types
const firstName: string = 'Nino';
const age: number = 23;
const isMale: boolean = true;
const bigNum: bigint = 9123412999999999993412341234n;
const nulls: null = null;
const undefine: undefined = undefined;
const mySymbol: symbol = Symbol('name');
console.log(mySymbol.description);

// Combining Types: Union Types
let userID: string | number = 'hello';
userID = 100;
console.log(userID);

// Object Types
const userOne: object = {
	name: 'Nino',
	age: 23,
	isAdmin: true,
	id: 123,
};

let userTwo: {
	firstName: string;
	userAge: number;
	isMale: boolean;
	userID: string;
};

userTwo = {
	firstName: 'Louis',
	userAge: 23,
	isMale: true,
	userID: 'abc',
};

console.log(userTwo);

// Array Types
const myHobbies: Array<string> = ['Sports', 'Cooking', 'Reading'];
const allCaps: Array<string> = myHobbies.map((name) => name.toUpperCase());

const myNames: string[] = ['Nino', 'Louis', 'Aranas', 'Akut'];
// number[], boolean[], {name: string, age: number}[]

console.log(allCaps);
