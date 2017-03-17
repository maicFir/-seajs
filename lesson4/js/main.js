//main入口文件
define(function(require,exports,module){
	
	var boxDom = document.getElementById("box");
	var boxDom2 = document.getElementById("wrapBox");
	var boxDom3 = document.getElementById("innerBox");

	require("../js/draw.js").draw(boxDom);
	require("../js/scale.js").scale(boxDom3,boxDom2);

})