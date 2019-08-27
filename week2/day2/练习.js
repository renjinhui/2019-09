function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
}; 
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};

function getName() {
    console.log(5);
}

Foo.getName();
getName();
Foo().getName();
getName();
var a = new Foo.getName();
var b = new Foo().getName();
var c = new new Foo().getName();
console.log(a, b, c);



function Fn(){
    var a = 1;
    this.a = a;
}
Fn.prototype.say = function(){
    this.a = 2;
};
var f2 = new Fn();
Fn.prototype = new Fn;
var f1 = new Fn;
f1.__proto__.b = function (){
    this.a = 3;
};
console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);
console.log(f2.b);
console.log(f1.hasOwnProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
console.log(Fn.prototype);


