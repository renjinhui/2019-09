var a = {
    x:1
};
var b = a;
a.c = a = {y:1};
console.log(a);// {y:1}
//--------------------------


console.log(a,b,c); //undefined *  3
var a=10,b=20,c=30;
function f(a){ // a  b 私有
    console.log(a,b,c);// 10 undefined  30
    var b = a = c = 100;// 把私有 a b 改成 100 ； 把上级的c改成100；
    console.log(a,b,c) // 100 * 3
}
f(10,20);
console.log(a,b,c); // 10 20 100



//----------------------------
a(); // 1
// c();
var a = c = function() {
    console.log(2)
};
a(); //2
function a() {
    console.log(1)
};
a(); //2

//----------------------------
console.log(a);
var a=12;
function fn(){
    console.log(a);
    a=13;
}
fn();

//----------------
var foo=1;
function bar(){
    if(!foo){
        var foo=10;
    }
    console.log(foo);
}
bar();

//----------------------------

//----------------------------
function a() {
    console.log(1)
};
function c() {
    console.log(2)
}
(function(b) {
    b();//4
    c();//2
    var b = c = function a() {
        console.log(3)
    };
    function b(){
        console.log(4)
    }
    b();// 3
})(a);
c(); //3

//----------------------------------------------------
alert(a); //undefined
console.log("a" in window); // true
if(("a" in window)){
    var a = 10;
    function fn() {
        console.log(3)
    }
}
console.log(a); //10 
console.log(fn()); // 3
if(8==8){
    function fn(){
        console.log(2);
    }
}
console.log(fn()); //2

//===============================
var n=5;
function a(n){// n 是私有的undefined
    n++;
    n=10;// 11
    b();
    function b(){
        n++;
        alert(n);
    };
}
a();
alert(n);

//
var a=3;
function c(a){
    alert(a);
}
(function(){
    var a=4;
    c(a);  //4
})();


//
var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n)
    };
    f();
    return f
}
var f = fn();
f();
f();
console.log(n);

//======================
var i = 1;
function fn(i) {
    return function (n) {
        console.log(n+(++i))
    }
}
var f = fn(2);
f(3);
fn(5)(6)
fn(3)(2)
f(4);

//
let i = 1;
let fn = function (n) {
    i *= 2;
    return function (m) {
        i += n + m;
        console.log(i);
    }
};
let f = fn(2);
f(3);
fn(2)(3);
f(4);
f(5);


