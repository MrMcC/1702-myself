(function($,window,document){
//	$.fn.bg = function(bcolor){
//		this.css("background-color",bcolor)
//		return this;
//	}
//	$.fn.color = function(color){
//		this.css("color",color)
//		return this;
//	}
	$.fn.extend({
		 bg : function(bcolor){
			this.css("background-color",bcolor)
			return this;
		},
		color (color){
			this.css("color",color)
			return this;
		}
	})
})(jQuery,window,document)
