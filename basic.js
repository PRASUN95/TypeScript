"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome TypeScript";
console.log(message);
var x = 20;
var y = 34;
var title = "Beginner";
// let x = 23; // Cannot redeclare block-scoped variable 'x'
var isBeginner = true;
var total = 10;
var name = 'Code';
var sentence = "Hello coding world my name is " + name + " I am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = [25, "Jason"];
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["blue"] = 6] = "blue";
    Color[Color["green"] = 7] = "green";
})(Color || (Color = {}));
;
var c = Color.red;
console.log(c);
var randomValue = 1;
randomValue = true;
randomValue = "anyIsGood";
console.log(randomValue.name);
var myVariable = 12;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        name in obj;
}
if (hasName(myVariable))
    console.log(myVariable.name);
myVariable.toUpperCase;
var a;
a = 20;
a = true;
var b = 10;
//b = true;  // error : type 'true' is not assignable to type 'number'. variable acts like first assigned value.
var multitype; // restricts to the specified type & provides intelligence support
multitype = 20;
multitype = true;
function sum(num1, num2) {
    if (num2)
        return num1 + num2;
    return num1;
}
function sum1(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
sum(1, 2);
sum(1);
sum1(1, 2);
sum1(1);
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good morning ' + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delgating tasks' + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
