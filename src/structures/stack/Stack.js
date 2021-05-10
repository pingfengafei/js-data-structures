"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack(stack) {
        if (stack === void 0) { stack = []; }
        this.list = [];
        this.count = 0;
        this.list = stack;
        this.count = stack.length;
    }
    Stack.prototype.push = function (item) {
        this.list.push(item);
        ++this.count;
    };
    Stack.prototype.pop = function () {
        var item;
        if (this.count >= 1) {
            item = this.list.pop();
            --this.count;
        }
        return item;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.length = function () {
        return this.count;
    };
    return Stack;
}());
exports["default"] = Stack;
