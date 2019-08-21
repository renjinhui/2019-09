// var username = '登录用户名';
// var password = '登录密码';
// log.onclick = function () {
//     console.log(username, password)
// }

function loginM() {
    function init() {
        var username = '登录用户名';
        var password = '登录密码';
        log.onclick = function () {
            console.log(username, password)
        }
    }
    function fn() {
        console.log('我是登录的函数')
    }
    return {
        init: init,
        fn:fn
    }
}

(function(){
    var a = 12;
    function f(){
        console.log(a)
    }
    return{
        f:f
    }
})()