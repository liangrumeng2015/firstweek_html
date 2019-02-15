'use strict';

/*(一)  var let  const常量不能被改变
	1.const可以不提醒大家不能被改变
	2.const比较符合函数式变成
	3.const和let本质的区别，编译器内部对处理机制
*/

if (true) {
	var a = '🍎';
}
console.log(a);

/*（二）
	【对象的解构】：数组解构、对象解构

*/
//#[数组解构]
// var s = ['🍌','🍎','🍊'];
// const[first,second,third] = s;
// console.log(third);

//#[对象解构]
// function test(){
// 	return{
// 		a:"hello",
// 		b:2
// 	}
// }
// const result = test();
// const {a,b} = result;
// console.log(a);


/*(三)
	[字符串模板]
*/

// var s = 'hello';
// var e = 'world';
// console.log(s+e);

// const s = 'hello ';
// const e = ' world';
// const c = test `foor ${s}你好${e} bar`;

// const c = `foor ${s}你好${e} bar`;
// console.log(c.startsWith('foo'));    //以..开始
// console.log(c.endsWith('ar'));      //以...结尾
// console.log(c.includes('bar'));    //包含...
// function test(strs){
// 	console.log(strs);    // ["foor ", "你好", " bar", raw: Array(3)]
// }

// function test(strs,...values){
// 	console.log(values);    // ["hello ", " world"]
// }

/*(四)
	数组
*/
// const s = "😝🙃😝";
// const result = Array.from(s);
// console.log(result);   //打印出数组    ["😝", "🙃", "😝"]

// const s = "😝🙃😝";
// const test = ["🍎",'🌰','🍇',...s];      
// console.log(test);           //["🍎", "🌰", "🍇", "😝", "🙃", "😝"]


/*(五)
	对象
*/

// const s = "😝🙃😝";
// const test = ["🍎",'🌰','🍇',...s]; 
// const result = {
// 	k1:11,
// 	s,
// 	test
// }
// console.log(result);


// const s = "😝🙃😝";
// const test = ["🍎",'🌰','🍇',...s]; 
// const result = {
// 	k:11,
// 	s,
// 	q(){
// 		console.log('🐧');
// 	}
// }
// console.log(result);
// result.q();   //🐧


// const a = {};
// Object.assign(a,{x:3});

// const a = {x:null};
// a.x = 3;
// console.log(a);    //3

// console.log(NaN == NaN);            //false
// console.log(Object.is(NaN,NaN));     //true

// const eat = {
// 	getEat(){
// 		return '🍗';
// 	}
// }
// const drink = {
// 	getDrink(){
// 		return '🍺';
// 	}
// }
// 	// let sunday = Object.create(eat);
// 	// // console.log(sunday.getEat());   //找原型链里面的方法
// 	// // console.log(Object.getPrototypeOf(sunday));   //找原型链上的方法

// 	// Object.setPrototypeOf(sunday,drink);   //设置原型链上的方法
// 	// console.log(Object.getPrototypeOf(sunday));  //返回原型链上的方法

// 	// console.log(sunday.getDrink());

// let sunday = {
// 	__proto__:drink,
// 	getDrink(){
// 		return super.getDrink() + '☕️';
// 	}       
// }
// // sunday.__proto__ = drink;
// console.log(sunday.getDrink());


/*（六）函数

	箭头函数:会绑定当前对象的顶级作用域

*/
// (()=>{})();
//  var result = [1,2,3].map((index)=>index * 4);
// console.log(result);

// windw.a = 30;
// const s = {
// 	a:40,
// 	p:function(){
// 		const qq = {
// 			a:10,
// 			test:()=>{
// 				console.log(this.a);
// 			}
// 		}
// 		qq.test();
// 	}
// }

// function test(a=1,b){     
// 	console.log(a);
// }
// test();   //不传参数

// function test(...results){     
// 	console.log(results);
// }
// test(40,[1,2,3]);   


/*(七)
	Iteratro和for...of    
	
*/
//# Interator
//解决异步的办法，用的不多了
// let zhangsan = function* (){
// 	yield "🍨";
// 	yield "❄️";
// }
// const result = zhangsan();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

//# for...of...  用于数组
// const arr = ["🍎",'🌰','🍇'];
// const obj = {
// 	a:'☕️',
// 	b:'🍔',
// 	c:'🍗'
// }
// for(let v of arr){
// 	console.log(v);   //返回具体的值
// }

// for(let v in arr){
// 	console.log(v);   //返回索引
// }

//Class类
// class Person{
// 	constructor(age){
// 		this.age = age;
// 	}
// 	test(){
// 		console.log(`小王的年龄是${this.age}`);
// 	}
// }
// const xiaowang = new Person(30);
// console.log(xiaowang.age);
// console.log(xiaowang.test());

// class Person{
// 	constructor(age){
// 		this.age = age;
// 	}
// 	test(){
// 		console.log(`小王的年龄是${this.age}`);
// 	}
// }
// class Man extends Person{
// 	constructor(age){
// 		super(age);
// 		this.arr = [];
// 	}
// 	set menu(data){
// 		this.arr.push(data);
// 	}
// 	get menu(){
// 		return this.arr;
// 	}
// 	tell(){
// 		super.test();
// 		console.log('hello');
// 	}
// 	static init(){
// 		console.log("static");
// 	}
// }
// 	// const xiaowang = new Man(30);
// 	// // console.log(xiaowang.tell());
// 	// xiaowang.menu = "🍅";
// 	// console.log(xiaowang.menu);
// Man.init();


// //# Set和Map
// let arr = new Set("🍔🍞");
// arr.add('🍪');    //添加元素
// arr.add('🍪');
// arr.delete('🍞');    //删除元素
// // console.log(arr);
// // console.log(arr.size);   //长度
// // console.log(arr.has('🍔'));   //判断元素是否存在 true
// // console.log(arr);
// for(let v of arr){
// 	console.log(v);   //遍历出来
// }
// arr.clear();
// console.log(arr.size);

// //# map
// let food = new Map();
// let fruits = {},cook = function(){};
// food.set(fruits,"🍋");
// food.set(cook,"🍴");
// 	// console.log(food);
// // console.log(food.get(cook));
// // console.log(food.size);
// // food.delete(fruits);
// // console.log(food.size);
// food.clear();
// console.log(food.size);

// //练习：数组去重
// const arr1 = [12,34,6,89,32,6];
// const result = [...new Set(arr1)];
// console.log(result);

// //# Module
// import jquery from "jquery";

// const test = function(){}
// const gogo = function(){}
// export default{test,gogo}


/*
	async对象，：用于ajax调用
	(async(){

	})();

*/

/*
	Decorator:  @outbind /  @readonly   /@override
	Set和Map数据结构
*/

var a = 'abc';
console.log(Array.from(a).join(' '));
