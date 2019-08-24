var regM = (function(){
    var name = 123;
    var age = 234;
    var f = function () {
        console.log('注册模块')
        console.log(name,age)
    }
    return {
        f
    }
})();