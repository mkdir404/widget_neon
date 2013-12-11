Class('List').inherits(Widget)({
	HTML : '<div>\
				<ul></ul>\
			</div>',
	ELEMENT_CLASS : 'list-todo',
	prototype : {
		init:function(config){
			Widget.prototype.init.call(this,config);
			console.log('Init List');
		}
	}
});