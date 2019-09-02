var reg = /\d/;
console.log(reg.test('你好'))// 查看后边的字符串中有没有 满足正则的字符
console.log(reg.test('你好234234'))
console.log(reg.test('你好2'))
console.log(reg.test('0你好'))
console.log(reg.test('你9好'))

var reg2 = /\D/
console.log(reg2.test('你好'))// true
console.log(reg2.test('你好234234'))// true
console.log(reg2.test('你好2'))// true
console.log(reg2.test('0你好'))// true
console.log(reg2.test('你9好'))// true
console.log(reg2.test('666')) // false

console.log('=====================================================')
var reg3 = /\w/ // 数字 字母 下划线
console.log(reg3.test('你好'))//false    // 查看后边的字符串中有没有 满足正则的字符
console.log(reg3.test('你好234234'))
console.log(reg3.test('你好2'))
console.log(reg3.test('0你好'))
console.log(reg3.test('你9好'))
console.log(reg3.test('666'))
console.log(reg3.test('a你好'))
console.log(reg3.test('你_好'))


console.log('=====================================================')
var reg3 = /\W/ // 除了数字 字母 下划线
console.log(reg3.test('你好'))    // 查看后边的字符串中有没有 满足正则的字符
console.log(reg3.test('你好234234'))
console.log(reg3.test('你好2'))
console.log(reg3.test('0你好'))
console.log(reg3.test('你9好'))
console.log(reg3.test('666'),111111111111111)
console.log(reg3.test('a你好'))
console.log(reg3.test('你_好'))


console.log('=====================================================')
var reg4 = /^\d/; // 以数字开头
console.log(reg4.test('你好'))    // 查看后边的字符串中有没有 满足正则的字符
console.log(reg4.test('你好234234'))
console.log(reg4.test('你好2'))
console.log(reg4.test('0你好'),22222222222222222)
console.log(reg4.test('你9好'))
console.log(reg4.test('666'),222222222222222222)
console.log(reg4.test('a你好'))
console.log(reg4.test('你_好'))


console.log('=====================================================')
var reg5 = /\d$/; // 以数字结尾
console.log(reg5.test('你好'))    // 查看后边的字符串中有没有 满足正则的字符
console.log(reg5.test('你好234234'),'-----')
console.log(reg5.test('你好2'),'-----')
console.log(reg5.test('0你好'))
console.log(reg5.test('你9好'))
console.log(reg5.test('666'),'-----')
console.log(reg5.test('a你好'))
console.log(reg5.test('你_好'))

var reg5 = /^\d$/; // 以数字开头，并且以这个数字结尾； 也就是只能一个数字
console.log(reg5.test('你好'))    // 查看后边的字符串中有没有 满足正则的字符
console.log(reg5.test('你好234234'))
console.log(reg5.test('你好2'))
console.log(reg5.test('0你好'))
console.log(reg5.test('你9好'))
console.log(reg5.test('666'))
console.log(reg5.test('678'))
console.log(reg5.test('7'))

var reg6 = /\./; // 点在正则中代表除了换行以外的所有字符；  \. 才代表 点本身
console.log(reg6.test('123'))//false
console.log(reg6.test('12.3')) // true
console.log(reg6.test('qweqe.serwr'))// true

var reg7 = /[ab]/; //字符串中含有 a 或 b ；  
console.log(reg7.test('ahello'))
console.log(reg7.test('hello'))
console.log(reg7.test('hello b'))
console.log(reg7.test('hello ab'))


console.log('=====================================================')
// 能匹配 数字 和 字母 的正则
var reg8 = /[0-9a-zA-Z]/
var reg8 = /[0-9A-Za-z]/
var reg8_2 = /[0-z]/
console.log(reg8.test('aBc'))
console.log(reg8.test('6aBc'))
console.log(reg8_2.test('_'))
console.log(reg8.test('你好'))


console.log('=====================================================')
var reg9 = /18|19/
console.log(reg9.test('1819'))
console.log(reg9.test('18'))
console.log(reg9.test('19'))
console.log(reg9.test('1'))
console.log(reg9.test('89'))
console.log(reg9.test('819'))

console.log('=====================================================')
var reg11 = /^18|19$/
//以18开头或者19结尾  以1开头后边跟个8    √
//以1开头 中间时 8  或者 1； 以 9结尾    ×
console.log(reg11.test('1819'))
console.log(reg11.test('18'))
console.log(reg11.test('19'))
console.log(reg11.test('1'))
console.log(reg11.test('89'))
console.log(reg11.test('819'))

//以1开头 中间时 8  或者 1； 以 9结尾
var reg12 = /^1(8|1)9$/
console.log(reg12.test('1819'))

var reg13 = /hello(?=qqq)/ // 
console.log(reg13.test('helloqqq'))
console.log(reg13.test('hello'))
console.log(reg13.test('helloawq'))
console.log(reg13.test('hellowww'))



var reg14 = /Windows(?=95|98|NT|2000)/;
var str1 = 'this is a Windows2018 system';
var str2 = 'this is a Windows98 system';
var str3 = 'this is a WindowsNT system';
console.log(reg14.test(str1))
console.log(reg14.test(str2))
console.log(reg14.test(str3))


var reg15 = /Windows(?!95|98|NT|2000)/;
var str1 = 'this is a Windows2018 system';
var str2 = 'this is a Windows98 system';
var str3 = 'this is a WindowsNT system';
console.log(reg15.test(str1))
console.log(reg15.test(str2))
console.log(reg15.test(str3))