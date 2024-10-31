// Inference & Explicit Type Annotations ==========================
let userName: string = 'Nino';
console.log(userName);

// Basic Primitive Types ==========================================
const firstName: string = 'Nino';
const age: number = 23;
const isMale: boolean = true;
const bigNum: bigint = 9123412999999999993412341234n;
const nulls: null = null;
const undefine: undefined = undefined;
const mySymbol: symbol = Symbol('name');
console.log(mySymbol.description);

// Combining Types: Union Types ===================================
let userID: string | number = 'hello';
userID = 100;
console.log(userID);

// Object Types ===================================================
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

// Array Types ==========================================================
const myHobbies: Array<string> = ['Sports', 'Cooking', 'Reading'];
const allCaps: Array<string> = myHobbies.map((name) => name.toUpperCase());

const myNames: string[] = ['Nino', 'Louis', 'Aranas', 'Akut'];
// number[], boolean[], {name: string, age: number}[]

console.log(allCaps);

// Adding Types to Functions ============================================
type addFn = (a: number, b: number) => number;

function add(a: number, b: number): number {
	const result: number = a + b;
	return result;
}

console.log(add(5, 10));

function calculate(a: number, b: number, callbackFunction: addFn): number {
	return callbackFunction(a, b);
}

console.log(calculate(50, 10, add));

// Creating Custom Types / Type Aliases ==================================
type StringNum = string | number;

const plateNUmber: StringNum = 'ABC 123';
console.log(plateNUmber);

type User = {
	firstName: string;
	userAge: number;
	isMale: boolean;
	userID: string;
};

const myUserObj: User = {
	firstName: 'Bro',
	userAge: 25,
	isMale: true,
	userID: 'zxc',
};

console.log(myUserObj);

// Defining Object Types with Interfaces ==================================
interface SampleCredentials {
	password: string;
	email: string;
}

let creds: SampleCredentials;
creds = { password: 'abc', email: '123' };

console.log(creds);
