Class('DetailsTodo').inherits(Widget)({
	prototype : {
		init: function(){
			Widget.prototype.init.call(this);
			console.log('init details TODO');
		}
	}
});