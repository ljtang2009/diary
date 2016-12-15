(function() {
	var _indexView = function() {};
	/**
	 * 初始化样式
	 * @param {Function} next
	 */
	_indexView.prototype.initStyle = function(next) {
		//背景
		var divGB = document.getElementById("divGB");
		divGB.style.height = window.innerHeight + 'px';
		//moutain1
		divMountain1.style.height = divMountain1.clientWidth * 0.3 + 'px';
		divMountain1.style.top = window.innerHeight + 'px';
		//mountain2
		divMountain2.style.height = divMountain2.clientWidth * 0.4 + 'px';
		divMountain2.style.top = window.innerHeight + 'px';
		//mountain2
		divMountain3.style.height = divMountain3.clientWidth * 0.4 + 'px';
		divMountain3.style.top = window.innerHeight + 'px';
		//初始化主按钮
		divMainButton.style.boxShadow = "0px 0px 10px 2px #F6F6F6";
		divMainButton.style.width = divMainButton.style.height = window.innerHeight / 5 + "px";
		divMainButton.style.left = (window.innerWidth / 2) - (divMainButton.clientWidth / 2) + "px";
		divTopMainButton.style.boxShadow = "0px 0px 10px 2px #F6F6F6";
		//初始画星星和云
		divStar1.style.top = window.innerHeight / 5 + 'px';
			divStar1.style.left = window.innerWidth / 7 + 'px';
			divStar2.style.top = window.innerHeight / 1.8 + 'px';
			divStar2.style.left = window.innerWidth / 4 + 'px';
			divStar3.style.top = window.innerHeight / 4 + 'px';
			divStar3.style.left = window.innerWidth / 1.2 + 'px';
			this.setStart1Animation(divStar1);
			this.setStart2Animation(divStar2);
			this.setStart3Animation(divStar3);
			divCloud1.style.top = window.innerHeight / 4 + 'px';
			divCloud1.style.left = window.innerWidth / 1.3 + 'px';
			divCloud2.style.top = window.innerHeight / 1.9 + 'px';
			divCloud2.style.left = window.innerWidth / 4 + 'px';
			this.setCloud1Animation(divCloud1);
			this.setCloud2Animation(divCloud2);
		//显示星星
		if (isNight){
			divStar1.style.display = 'block';
			divStar2.style.display = 'block';
			divStar3.style.display = 'block';
		}
		else {
			//显示云
			divCloud1.style.display = 'block';
			divCloud2.style.display = 'block';
		}
		//因为ios滚动时，主按钮会被navbar遮盖，设置z-index无用，所以只能设置这个高度
		//ios上有动画
		if (isIOS){
			TweenLite.to(divMountain1, 0.3, {top: window.innerHeight - divMountain1.clientHeight + 'px'});
			TweenLite.to(divMountain2, 0.4, {top: window.innerHeight - divMountain1.clientHeight * 1.4 + 'px'});
			TweenLite.to(divMountain3, 0.5, {top: window.innerHeight - divMountain1.clientHeight * 1.4 + 'px'});
			TweenLite.to(divMainButton, 0.6, {top: window.innerHeight / 3 + 'px', onComplete:next});
			
		}
		else {
			divMountain1.style.top = window.innerHeight - divMountain1.clientHeight + 'px';
			divMountain2.style.top = window.innerHeight - divMountain1.clientHeight * 1.4 + 'px';
			divMountain3.style.top = window.innerHeight - divMountain1.clientHeight * 1.4 + 'px';
			divMainButton.style.top = window.innerHeight / 3 + 'px';
			next();
		}
	}
	/**
	 * 渲染日记列表
	 * @param {Array} list
	 * @param {Function} next
	 */
	_indexView.prototype.renderDiaryList = function(list,next){
		if (list.length > 0){
			divDiaryList.style.display = 'block';
		}
		for(var i = 0; i < list.length; i++) {
			this.renderDiaryItem(list[i]);
		}
		//如果有diary,就显示第一个
		if(list.length > 0) {
			if (isIOS){
				TweenLite.to(divMountain1, 0.4, {top: divMountain1.offsetTop - 95 + 'px'});
				TweenLite.to(divMountain2, 0.4, {top: divMountain2.offsetTop - 95 + 'px'});
				TweenLite.to(divMountain3, 0.4, {top: divMountain3.offsetTop - 95 + 'px'});
				if (next){
					TweenLite.to(divDiaryList, 0.4, {top: divDiaryList.offsetTop - 95 + 'px', onComplete:next});
				}
				else {
					TweenLite.to(divDiaryList, 0.4, {top: divDiaryList.offsetTop - 95 + 'px'});
				}
			}
			else {
				if (next){
					divMountain1.style.top = divMountain1.offsetTop - 95 + 'px';
					divMountain2.style.top = divMountain2.offsetTop - 95 + 'px';
					divMountain3.style.top = divMountain3.offsetTop - 95 + 'px';
					divDiaryList.style.top = divDiaryList.offsetTop - 95 + 'px';
					next();	
				}
			}
		}
		else {
			if (next){
				next();
			}
		}
	}
	/**
	 * 渲染一个日记
	 */
	_indexView.prototype.renderDiaryItem = function(item){
		var itemDate = moment(item.date);
		item.dayOfWeek = itemDate.weekday();
		if(item.dayOfWeek == 0) {
			item.dayOfWeekChinese = "星期一";
		} else if(item.dayOfWeek == 1) {
			item.dayOfWeekChinese = "星期二";
		} else if(item.dayOfWeek == 2) {
			item.dayOfWeekChinese = "星期三";
		} else if(item.dayOfWeek == 3) {
			item.dayOfWeekChinese = "星期四";
		} else if(item.dayOfWeek == 4) {
			item.dayOfWeekChinese = "星期五";
		} else if(item.dayOfWeek == 5) {
			item.dayOfWeekChinese = "星期六";
		} else if(item.dayOfWeek == 6) {
			item.dayOfWeekChinese = "星期天";
		}
		item.yearMonth = itemDate.format("YYYY.M");
		item.day = itemDate.format("D");
		var html = templateDiaryItem(item);
		var li = document.createElement("li");
		li.innerHTML = html;
		li.className = "mui-table-view-cell";
		//自动显示省略号
		var divDiaryText = li.getElementsByClassName('divDiaryContentText')[0];
		$clamp(divDiaryText, {
			clamp: 3
		});
		//调整颜色
		//li.getElementsByClassName('divTimelineLineContainer')[0].style.color = styleWithTime.mainButtonColor;
		//li.getElementsByClassName('divTimelineLineContainer')[0].style.borderColor = styleWithTime.mainButtonColor;
		//li.getElementsByClassName('divTimelineLineDown')[0].style.borderColor = styleWithTime.mainButtonColor;
		//li.getElementsByClassName('divDiaryContentItem')[0].style.background = styleWithTime.mainButtonColor;
		ulDairyList.appendChild(li);
	}
	/**
	 * 设置主按钮动画
	 */
	_indexView.prototype.setMainButtonAnimation = function(){
		divMainButtonInitTop = divMainButton.offsetTop;
		divTopMainButtonInitTop = parseInt(divTopMainButton.style.top.substring(0, divTopMainButton.style.top.length - 2));
		//升起
		function setMainButtonAnimationUP() {
			tweenMainButtonAnimationUP = TweenLite.to(divMainButton, 2, {
				top: divMainButtonInitTop - 4 + "px",
				boxShadow: "0px 0px 0px 0px #F6F6F6",
				onComplete: setMainButtonAnimationDown,
			});
		}
		function setTopMainButtonAnimationUP() {
			tweenTopMainButtonAnimationUP = TweenLite.to(divTopMainButton, 2, {
				top: divTopMainButtonInitTop - 4 + "px",
				boxShadow: "0px 0px 0px 0px #F6F6F6",
				onComplete: setTopMainButtonAnimationDown,
			});
		}
		//下降
		function setMainButtonAnimationDown() {
			tweenMainButtonAnimationDown = TweenLite.to(divMainButton, 2, {
				top: divMainButtonInitTop + 4 + "px",
				boxShadow: "0px 0px 10px 2px #F6F6F6",
				onComplete: setMainButtonAnimationUP
			});
		}
		function setTopMainButtonAnimationDown() {
			tweenTopMainButtonAnimationDown = TweenLite.to(divTopMainButton, 2, {
				top: divTopMainButtonInitTop + 4 + "px",
				boxShadow: "0px 0px 10px 2px #F6F6F6",
				onComplete: setTopMainButtonAnimationUP
			});
		}
		setMainButtonAnimationUP();
		setTopMainButtonAnimationUP();
	}
	/**
	 * 设置star1动画
	 */
	_indexView.prototype.setStart1Animation = function(element){
		//升起
		function setStar1AnimationShow() {
			tweenStar1AnimationShow = TweenLite.to(element, 3.5, {
				opacity: 1,
				onComplete: setStar1AnimationHide,
			});
		}
		//下降
		function setStar1AnimationHide() {
			tweenStar1AnimationHide = TweenLite.to(element, 3.5, {
				opacity: 0.1,
				onComplete: setStar1AnimationShow
			});
		}
		setStar1AnimationShow();
	}
	/**
	 * 设置star2动画
	 */
	_indexView.prototype.setStart2Animation = function(element){
		//升起
		function setStar2AnimationShow() {
			tweenStar2AnimationShow = TweenLite.to(element, 2.8, {
				opacity: 1,
				onComplete: setStar2AnimationHide,
			});
		}
		//下降
		function setStar2AnimationHide() {
			tweenStar2AnimationHide = TweenLite.to(element, 2.8, {
				opacity: 0.1,
				onComplete: setStar2AnimationShow
			});
		}
		setStar2AnimationShow();
	}
	/**
	 * 设置star3动画
	 */
	_indexView.prototype.setStart3Animation = function(element){
		//升起
		function setStar3AnimationShow() {
			tweenStar3AnimationShow = TweenLite.to(element, 5, {
				opacity: 1,
				onComplete: setStar3AnimationHide,
			});
		}
		//下降
		function setStar3AnimationHide() {
			tweenStar3AnimationHide = TweenLite.to(element, 5, {
				opacity: 0.1,
				onComplete: setStar3AnimationShow
			});
		}
		setStar3AnimationShow();
	}
	/**
	 * 设置cloud1动画
	 * @param {Object} element
	 */
	_indexView.prototype.setCloud1Animation = function(element){
		var _this = this;
		tweenCloud1AnimationMove = TweenLite.to(element, 1500, {
			left: -50,
			onComplete: function(){
				element.style.left = window.innerWidth + 50 + 'px';
				_this.setCloud1Animation(element);
			}
		});
	}
	/**
	 * 设置cloud2动画
	 * @param {Object} element
	 */
	_indexView.prototype.setCloud2Animation = function(element){
		var _this = this;
		tweenCloud2AnimationMove = TweenLite.to(element, 60, {
			left: -60,
			onComplete: function(){
				element.style.left = window.innerWidth + 60 + 'px';
				_this.setCloud2Animation(element);
			}
		});
	}
	window.indexView = new _indexView();
})();