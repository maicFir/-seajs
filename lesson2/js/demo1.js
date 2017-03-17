define(function(require,exports,module){
    
    function say(){
            var cnt = "不写勤奋写代码，就一直是菜鸟";
            return cnt;
   };
    exports.say = say;//exports   暴露内部的属性及方法给外面函数数使用

	console.dir(require);
	console.dir(exports);
	console.dir(module);
	console.log(module.id+"======"+module.uri);
	console.log(module.require == require);
    console.log(module.exoprts == exports)
});