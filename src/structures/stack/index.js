"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1["default"]();
stack.push(1);
stack.push(2);
stack.push('fooooo');
console.log(stack.length());
