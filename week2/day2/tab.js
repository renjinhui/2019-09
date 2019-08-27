function Tab(id) {
    this.box = document.querySelector(id);
    this.tabs = this.box.getElementsByClassName('tab');
    this.bodys = this.box.getElementsByClassName('body');
    // 元素的获取 每个实例跟每个实例之间可能不一样，但是
    // 每个选项卡都需要 循环绑定  和 清除类名
    this.mapBind();
}
Tab.prototype.mapBind = function () {
    // this.tabs
    for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].onclick = () => {
            // 为什么使用箭头函数？？？
            // 因为普通函数 中的this是当前操作的元素，不是我们当前产生的实例
            // 所以 我们用箭头函数， 箭头函数中的this 是指向上级作用域的this
            // 也就是我们当前操作的实例；
            this.clearClass();
            this.tabs[i].className = 'tab current';
            this.bodys[i].className = 'body current';
        }
    }
}
Tab.prototype.clearClass = function () {
    // 清除谁的类名？？
    // 清除 tabs 和 bodys 上的 current类名
    // this.tabs, this.bodys
    [...this.tabs].forEach((v, i) => {
        v.className = 'tab';
        this.bodys[i].className = 'body';
    })
    // for(var i = 0; i < this.tabs.length; i++){
    //     this.tabs[i].className = 'tab';
    //     this.bodys[i].className = 'body';
    // }
}