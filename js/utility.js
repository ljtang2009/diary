(function(){
	var _utility = function(){};
	/**
	 * @description 判断是否是晚上
	 * @return {Boolean}
	 * @requires moment
	 */
	_utility.prototype.isNight = function(){
		var result = false;
		var now_hour = parseInt(moment().format('H'));
		if (now_hour >= 18 || now_hour < 6){
			result = true;
		}
		return false;
	}
	/**
	 * @description 更具时间获取样式
	 * @return {Object}
	 */
	_utility.prototype.getStyleWithTime = function(){
		var result = {};
		if (this.isNight()){
			result.topBarBg = "0,79,170";		//顶栏背景色
			result.topBarBorder = "8,60,108";	//顶栏边框
		}
		else {
			result.topBarBg = "252,193,100";
			result.topBarBorder = "209,155,16";
		}
		return result;
	}
	/**
	 * 获取元素绝对位置
	 * @param {Object} element
	 */
	_utility.prototype.getElementTop = function(element){
		var actualTop = element.offsetTop;
		var current = element.offsetParent;
		while (current !== null){
			actualTop += current.offsetTop;
			current = current.offsetParent;
		}
		return actualTop;
	}
	window.utility = new _utility();
})();
