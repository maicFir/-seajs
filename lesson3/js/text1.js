
//define相当于一个全局函数，定义一个模块

//define(parmes)parmes可以是字符串，也可以是对象，也可以是一个回调函数

//require:依赖模块,获取模块的接口，接收模块的标识
//exports:将内部的方法及属性暴露出去
define(function(require,exports,module){
	
	function say(){
		var cnt = "不写勤奋写代码，就一直是菜鸟";
        return cnt;
		//console.log("hello world");
	};
	exports.say = say;//exports将内部的方法暴露出去
	console.dir(exports);
	console.dir(require);
	console.dir(module);
	require("../js/a.js");//引入a.js,相对于sea.js目录
	console.log(stu.fn());//结果是:函数式编程,如果a.js不是一个模块，则相当于a.js写在了这里

	var expots = require("../js/b.js");//b.js是一个模块，所以  require('../js/b.js')===>等价于b.js中的exports
	var tt = expots.a;//expots调用模块接口中的a
	console.log("我是b.js中的a变量==="+tt);

	console.log("==module是内部的属性=="+module.id);//module存储当前模块的属性和方法

})