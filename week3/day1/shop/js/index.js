let dataAry ;
// 1、通过ajax获取数据
let xhr = new XMLHttpRequest();
xhr.open('get','./data.json',false);
xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status == 200){
        // 代表请求成功 
        //xhr.response 是从后台获取到的 JSON 字符串；
        dataAry = JSON.parse(xhr.response)
    }
}
xhr.send();
console.log(dataAry);

//2、把获取到的数据渲染到页面上
let box = document.querySelector('main');
function renderHtml(dataAry) {
    let str = '';//用来拼接DOM结构字符串的；
    dataAry.forEach(item=>{
        let {img,num,price,title} = item;
        str += `<div class="good_box">
            <div class="img_box">
                <img src="${img}"
                    alt="">
            </div>
            <div class="desc">${title}</div>
            <div class="price">￥${(price/100).toFixed(2)}</div>
            <div class="bot_box">
                <div class="left_box">选购</div>
                <div class="right_box">评价数${num}</div>
            </div>
        </div>`
    })
    box.innerHTML = str;
}
renderHtml(dataAry);

// 3、实现排序
let timeBtn = document.querySelector('.timeBtn'),
    priceBtn = document.querySelector('.priceBtn'),
    commentBtn = document.querySelector('.commentBtn');
timeBtn.flag = 1;
timeBtn.onclick = function(){
    this.flag *= -1;
    dataAry.sort((a,b)=>{
        return (a.time - b.time)*this.flag;
    })
    // 排序好的数据重新渲染到页面上即可
    renderHtml(dataAry);
}    
priceBtn.flag = 1;
priceBtn.onclick = function(){
    this.flag *= -1;
    dataAry.sort((a,b)=>{
        return (a.price - b.price)*this.flag;
    })
    // 排序好的数据重新渲染到页面上即可
    renderHtml(dataAry);
}   
commentBtn.flag = 1;
commentBtn.onclick = function(){
    this.flag *= -1;
    dataAry.sort((a,b)=>{
        return (a.num - b.num)*this.flag;
    })
    // 排序好的数据重新渲染到页面上即可
    renderHtml(dataAry);
}   