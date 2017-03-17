//request:引入其他模块，exports:暴露单独模块的属性和方法
define(function(request,exports,module){
	
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