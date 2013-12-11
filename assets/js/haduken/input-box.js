Class(UI,'inputBox').inherits(Widget)({
	HTML:'<input type="text">',
	ELEMENT_CLASS:'inboxInput',
	prototype:{
		init:function(config){
			
			Widget.prototype.init.call(this,config);

			this.element.val(this.defaultVal);
			this.element.focus();

			this._bindEvents();
		
		},

		_bindEvents : function(){
			this.element.bind('keyup focusout', this._addElemetListLi.bind(this) );
		},

		_addElemetListLi : function(e){

			if(e.keyCode == 13 || e.keyCode === undefined ){
				console.log( this.element.val() );
			}
			
		}
	}
});