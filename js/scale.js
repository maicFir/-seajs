//拖动盒子能放大和缩小

define(function(require,exports,module){
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