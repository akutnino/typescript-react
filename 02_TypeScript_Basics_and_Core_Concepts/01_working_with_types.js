var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Inference & Explicit Type Annotations ==========================
var userName = 'Nino';
console.log(userName);
// Basic Primitive Types ==========================================
var firstName = 'Nino';
var age = 23;
var isMale = true;
var bigNum = 9123412999999999993412341234n;
var nulls = null;
var undefine = undefined;
var mySymbol = Symbol('name');
console.log(mySymbol.description);
// Combining Types: Union Types ===================================
var userID = 'hello';
userID = 100;
console.log(userID);
// Object Types ===================================================
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
// Array Types ==========================================================
var myHobbies = ['Sports', 'Cooking', 'Reading'];
var allCaps = myHobbies.map(function (name) { return name.toUpperCase(); });
var myNames = ['Nino', 'Louis', 'Aranas', 'Akut'];
// number[], boolean[], {name: string, age: number}[]
console.log(allCaps);
function add(a, b) {
    var result = a + b;
    return result;
}
console.log(add(5, 10));
function calculate(a, b, callbackFunction) {
    return callbackFunction(a, b);
}
console.log(calculate(50, 10, add));
var plateNUmber = 'ABC 123';
console.log(plateNUmber);
var myUserObj = {
    firstName: 'Bro',
    userAge: 25,
    isMale: true,
    userID: 'zxc',
};
console.log(myUserObj);
var creds;
creds = { password: 'abc', email: '123' };
console.log(creds);
// Interfaces vs Custom Types =============================================
// Use Custom Types by default.
// Use Interfaces for object only.
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
var admin = {
    permissions: ['Create', 'Read', 'Update', 'Delete'],
    userName: 'Nino',
    card: '',
};
console.log(admin);
var mainAdmin = {
    permissions: ['Create', 'Read', 'Update', 'Delete'],
    userName: 'Louis',
};
console.log(mainAdmin);
var role;
role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc'; would be an error.
console.log(role);
// Adding Type Guards ==========================================================
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        return;
    }
    switch (role) {
        case 'admin': {
            return;
        }
        case 'editor': {
            return;
        }
        case 'user': {
            return;
        }
        default: {
            return "".concat(action, " ").concat(role);
        }
    }
}
// Making Sense Of Generic Types ================================================
var roles;
roles = ['admin', 'editor'];
var textStorage = {
    storage: ['ABC'],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [{ firstName: 'bro', isMale: true, userAge: 23, userID: 'qwe' }],
    add: function (data) {
        if (typeof data.firstName === 'string') {
            console.log(data);
        }
        this.storage.push(data);
    },
};
// Generic functions ======================================================
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: 'Nino' }, { age: 23 });
console.log(newUser);
