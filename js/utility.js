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
		return result;
	}
	/**
	 * @description 更具时间获取样式
	 * @return {Object}
	 */
	_utility.prototype.getStyleWithTime = function(){
		var result = {};
		if (this.isNight()){
			result.bg = "linear-gradient(to bottom, #004FAA, #4F9DCA)";		//背景色
			result.mountain1 = "night_mountain_1.png";		//山图片1
			result.mountain2 = "night_mountain_2.png";		//山图片2
			result.mountain3 = "night_mountain_3.png";		//山图片2
			result.mainButtonColor = "#9EBEDF";				//主按钮颜色
			result.timelineBgColor = "#0C2A38";			//时间轴背景色
			result.timelineActiveItmeBgColor = "#0B4B7E";		//时间轴当前选中的背景色
		}
		else {
			result.bg = "linear-gradient(to bottom, #FEDE84, #FCE8B4)";
			result.mountain1 = "day_mountain_1.png";
			result.mountain2 = "day_mountain_2.png";
			result.mountain3 = "day_mountain_3.png";
			result.mainButtonColor = "#FFF2CF";
			result.timelineBgColor = "#A7A63F";
			result.timelineActiveItmeBgColor = "#EABB38";
			
		}
		return result;
	}
	/**
	 * @description 设置svg的颜色
	 * @param {Object} cfg {containerSelector:'',color:''}
	 */
	_utility.prototype.setSvgColor = function(cfg){
		for (var j = 0; j < cfg.containerArray.length; j++){
			var container = cfg.containerArray[j];
			var subdoc;
				if (container.contentDocument) {
					subdoc = container.contentDocument;
				} 
				else {
					try {
						subdoc = container.getSVGDocument();
					} catch(e) {}
				}
				if (subdoc){
					var pathes = subdoc.querySelectorAll('path');
					for (var i = 0; i < pathes.length; i++) {
						pathes[i].style.fill = cfg.color;
					}
				}
		}
	}
	window.utility = new _utility();
})();
