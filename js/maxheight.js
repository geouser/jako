var MaxHeight = function($els) {
	if (!$els) {
		return false;
	} else {
		this.$els = $els;
	}
	this.maxHeight = 0;
};

MaxHeight.prototype = {
	get: function() {
		this.maxHeight = Math.max.apply(null, this.$els.map(function() {
			return $(this).height();
		}).get());
		return this.maxHeight;
	}	
}
