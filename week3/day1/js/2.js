// 封装 一个类数组转数组的方法
var oLis = document.getElementsByTagName('li');
Object.prototype.trans = function (){
    // this 就是我们要去转化的类数组
    return [...this];
    return Array.from(this) 
    return [].slice.call(this)
} 
var lis = oLis.trans();

// 从数组或者类数组中随机删除几项 返回有删除项组成的新数组
Object.prototype.rm = function (n) {
    // this.length  和  n的情况
    if(n > this.length ){
        throw new Error('删除个数不合法');
    }
    // 随机删除n项
    // splice 删除 某一(Math.round(Math.random()*(this.length-1)))项
    // splice的操作需要执行n次
}

oLis.rm(2)// 随即删除了两项  返回值是删除的项组成的新数组