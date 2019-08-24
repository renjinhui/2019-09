var logModal = function () {
    var name = 123;
    var age = 234;
    var f = function () {
        console.log(name,age)
    }
    return {
        f
    }
}
var logM = (function(){
    var name = 123;
    var age = 234;
    var f = function () {
        console.log('登录模块')
        console.log(name,age)
    }
    return {
        f
    }
})();