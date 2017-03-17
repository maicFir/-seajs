//define(id,parms,callback)
//parms依赖的库
define('b',['jquery-1.11.2.min'],function(request,exports,module){
	
	var a = 111;
	exports.a = a;
	console.log($(document),module.id);//module.id ===>b

});