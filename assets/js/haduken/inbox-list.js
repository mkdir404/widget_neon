Class(UI,'inboxList').inherits(Widget)({
	HTML:'<li><i class="fa fa-bars"></i><input class="inboxInput" type="text" value="Nueva Lista"></li>',
	ELEMENT_CLASS:'inboxLiEl',
	prototype:{
		init:function(config){
			Widget.prototype.init.call(this,config);
			
			//console.log('inicializador elemento lista');
			this.inputEl = this.element.find('.inboxInput');
			this.element.attr('id',this.id );
			/*inputBox = new UI.inputBox({defaultVal:'Nueva lista'});
			inputBox.render(this.element);*/

			this._bindEvents();
		},
		_bindEvents : function(){
			this.element.dblclick( this._editElementList.bind(this) );
			this.element.click( this.setListTodo.bind(this) );
			this.inputEl.bind('keyup focusout', this._addElemetListLi.bind(this) );

		},
		_addElemetListLi :function(e){
			
			if(e.keyCode == 13 || e.keyCode === undefined ){
				if(this.inputEl.val() === ''){ this.inputEl.val('Nueva Lista'); }
				this.inputEl.parent().append( '<span>' + this.inputEl.val() + '</span>' );
				this.inputEl.remove();
			}
		},
		_editElementList : function (e) {

			this.uniqueElement = this.element.find('span');
			this.uniqueElement.parent().append('<input class="inboxInput" type="text" value="'+this.uniqueElement.text()+'"">');
			this.uniqueElement.remove();
			this.init();
			this.inputEl.focus();
			if(this.inputEl.val() === ''){ this.inputEl.val('Nueva Lista'); }
		},
		setListTodo :  function(e){
			new UI.Haduken().dispatch('my_evento');
		}
	}
});
