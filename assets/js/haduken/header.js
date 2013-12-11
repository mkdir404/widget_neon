Class('Header').inherits(Widget)({
	HTML:'<div>\
			<h1><i class= "fa fa-tags fa-2x" ></i> Small TODO with Neon Class </h1>\
		</div>',
	ELEMENT_CLASS : 'header',
	prototype:{

		init:function(){
			Widget.prototype.init.call(this);
			//console.log('inicializador Header');
		}
	}
});
