//1、
var str= "我是MT";
test();
function test() {
    console.log(str);
    var str= "哈哈哈";
    console.log(str);
}
console.log(str);

//2、
console.log(a);
a=12;
function fn(a){
    console.log(a);
    a=13
}
fn();
var a;
console.log(a);

//3、
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
var a = 10,b = 20;
var c = d = 20; //  var c = 20;d = 20
function test(){
    if("a" in window){
        var a = 1000;
    }else{
        var a = 100;
    }
    console.log(a);
}
test();
console.log(a)

//4、
var a = 1;
function fn() {
    console.log(a);
    var a = 5;
    console.log(a);
    a++;
    var a ;
    fn3();
    fn2();
    console.log(a);
    function fn2() {
        console.log(a);
        a = 20;
    }
}
function fn3() {
    console.log(a);
    a = 200;
};
fn();
console.log(a);


//5、
var n = 10;
function outer(){
    var n = 15;
    function inner(n){
        console.log(n)
        function center(){
            n++;
            console.log(n);
        }
        center();
    }
    inner(n);
}
outer();

//6、
var n = 10;
function outer(){
    n = 15;
    function inner(){
        console.log(n++);
        function center(){
            n+=2;
            console.log(n);
        }
        center();
    }
    inner();
};
outer();
console.log(n)



//----------------------------------------------------
alert(a);
console.log("a" in window);
if(!("a" in window)){
    var a = 10;
}
alert(a);

console.log(fn);
if(9==8){
    function fn(){
        alert(2);
    }
}
//    ---------------------------------
f = function(){return true};
g = function(){return false};
(function (){
    console.log(g);
    if(g()&&[]==![]){
        f = function f(){return false};
    }
    function g(){return true};
})();
alert(f());
alert(g())
