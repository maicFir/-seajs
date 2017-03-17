define(function(require,exoprts,module){
	
	/*
	require('../js/a.js');
	stu.say();
	var atext = require("../js/b.js").a;
	console.log("==="+atext);
	*/
	var tt = module.require('../js/b.js').a;
	console.log(tt);

	require.async('../js/b.js',function(b){
		b.price.text("jquery权威指南");
	})


});