(function() {
	var _detailView = function() {};
	/**
	 * 初始化样式
	 */
	_detailView.prototype.initStyle = function() {
		divTree.style.top = window.innerHeight - 160 + "px";
		divTree.style.left = window.innerWidth - 60 + "px"; 
		divShare.style.top = window.innerHeight - 100 + "px";
		divShare.style.left = window.innerWidth - 60 + "px"; 
		$('#tbContent').flexText();
	}
	window.detailView = new _detailView();
})();
