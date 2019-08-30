var obj = {
    name: " jsCoder",
    skill: ["css3","html5", "es6", "react", "angular"],
    say: function () {
        for(let i = 0, len = this.skill.length; i< len; i++){
            setTimeout(()=>{
                console.log("No." + i + this.name);
                console.log(this.skill[i]);
                console.log('--------------------------');
            },100);
        }
    }
}
obj.say();// say中的this是obj


var F = function(){};
Object.prototype.a=function(){
    console.log('a()')
};
Function.prototype.b=function(){
    console.log('b()')
};
var f=new F();
f.a();
f.b();
F.a();
F.b();

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
console.log(a,b,c);


var name = '中国',age = 5000;
function Person() {
    getName = function () {
      console.log(this.name)
    };
    this.name = 'zfpx';
    this.age = 9;

}
Person.name = '珠峰';
Person.getName = function () {
    console.log(this.name);
};
Person.prototype.getName = function () {
    console.log(this.name);
};
var obj = {name:'培训',f:Person};
var per = new Person();
per.getName = function(){
    console.log(12)
};
var per2 = new Person();
f();
Person();
per.getName();
per2.getName();
