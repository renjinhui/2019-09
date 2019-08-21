function fn() {
    var i = 5;
    return function (n) {
        console.log(n*(--i))
    }
}
var f = fn();
f(10);
fn()(10);
fn()(20);
f(20); 
//1、
var i = 2;
function fn() {
    i += 2;
    return function (n) {
        console.log(n + (--i));
    }
}
var f=fn();
f(2);
f(3);
fn()(2);
fn()(3);
f(4);
//2、
var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();
x();
x();
console.log(n);
//3、
let i = 1;
let fn = function (n) {
    i *= 2;
    return function (m) {
        i += (n + m);
        console.log(i);
    }
};
let f = fn(2);
f(3);
fn(2)(3);
f(4);
f(5);


//this
//1、
var num =1;
var obj = {
    num : 10,
    fn : (function () {
        this.num *=3;
        return function () {
            num +=2;
            this.num ++;
        }
    })()
};
var f = obj.fn;
f();
obj.fn();
console.log(num, obj.num);
//2
var name = '珠峰';
var age = 9;
age = (function (name,age) {
    name = '珠峰';
    age = age || this.age;
    this.age = arguments[0];
    console.log(name,age)
    return this.age;
})(name,age);
console.log(name,age);
//3
var obj = {name:'珠峰',age:9};
(function (obj) {
    obj.name = '中国';
    obj = {};
    obj.age = 5000;
    console.log(obj.age);
})(obj);
console.log(obj.name);
//4
var num = 1;
var obj = {num:2};
obj.fn = (function (num) {
    this.num = num*2;
    num++;
    return function (n) {
        this.num += n;
        num++;
        console.log(num)
    }
})(obj.num)
var fn = obj.fn;
fn(10);
obj.fn(20);
console.log(num, obj.num);