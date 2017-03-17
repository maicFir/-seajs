define('is',['jquery-1.11.2.min'],function(require,exports,module){

	
	var a = "前端开发";
	var price = {
		text:function(name){
			this.name = name;
			console.log(this.name);
		}
	}
	exports.a = a;
	exports.price = price;
})