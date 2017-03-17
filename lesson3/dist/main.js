
//main入口文件,合并，第一个参数为当前的id,第二个相当于引入依赖的模块的url
define('../dist/main.js',['../js/draw.js','../js/scale.js'],function(require,exports,module){
	
	var boxDom = document.getElementById("box");
	var boxDom2 = document.getElementById("wrapBox");
	var boxDom3 = document.getElementById("innerBox");

	require("../js/draw.js").draw(boxDom);
	require("../js/scale.js").scale(boxDom3,boxDom2);

})

//request:引入其他模块，exports:暴露单独模块的属性和方法
define('../js/draw.js',[],function(request,exports,module){
	
	function draw(obj){
		obj.onmousedown = function(e){
			var ev = e||window.event;
			var x0 = ev.clientX - obj.offsetLeft;
			var y0 = ev.clientY - obj.offsetTop;

			document.onmousemove = function(e){
				var ev = e||window.event;
				var x = ev.clientX - x0;
				var y = ev.clientY - y0;

				obj.style.left = x +"px";
				obj.style.top = y +"px";
			};
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		};
	};
	exports.draw = draw;

})
//拖动盒子能放大和缩小

define('../js/scale.js',[],function(require,exports,module){
	var flag = false;
	function scale(obj1,obj2){
		var obj = flag?obj1:obj2;
			
			obj1.onmousedown = function(e){
				var ev = e||window.event;
				var x0 = ev.clientX;
				var w1 = obj2.offsetWidth;
				var h1 = obj2.offsetHeight;
				var y0  = ev.clientY;
				document.onmousemove = function(ev){
					var ev = ev||window.event;
					var x = ev.clientX - x0 +w1;
					var y = ev.clientY - y0 +h1;
					
					obj2.style.width = x +"px";
					obj2.style.height = y + "px";
				};	
				document.onmouseup = function(){
					document.onmousemove = null;
				}	
			};
			/*
			obj2.onmousedown = function(e){
				
				var ev = e||window.event;
				var x0 = ev.clientX - obj2.offsetLeft;
				var y0  = ev.clientY - obj2.offsetTop;
				document.onmousemove = function(ev){
					var ev = ev||window.event;
					var x = ev.clientX - x0;
					var y = ev.clientY - y0;

					obj2.style.left = x +"px";
					obj2.style.top = y + "px";
				};	
				document.onmouseup = function(){
					document.onmousemove = null;
				}	
			}*/
		
	};
	exports.scale = scale;

})
