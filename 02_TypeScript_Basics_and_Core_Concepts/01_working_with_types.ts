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
const mySymbol: symbol = Symbol(23);
console.log(mySymbol);

// Combining Types: Union Types
let userID: string | number = 'hello';
userID = 100;
console.log(userID);
