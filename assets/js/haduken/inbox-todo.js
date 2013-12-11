/*Class(UI,'InboxTodo').inherits(Widget)({
	HTML:'<div>\
				<ul class="list-inbox">\
					<li><i class="fa fa-inbox"></i>Bandeja de entrada</li>\
				</ul>\
				<div class="add-list">\
					<i class="fa fa-plus-square"></i>Añadir una lista...\
				</div>\
		</div>',
	ELEMENT_CLASS :'inbox-todo',
	prototype:{
		init:function(){
			Widget.prototype.init.call(this);
			
			console.log('init inboxTodo');

			this.addListEl   = this.element.find('.add-list');
			this.listInboxEl = this.element.find('.list-inbox');
			this.count = 0;
			this._bindEvents();
		},
		_bindEvents : function(){
			this.addListEl.click(this._addElemetList.bind(this));
			
		},
		_addElemetList : function(){
			
			this.listInboxEl.append('<li class="inboxLiEl" id="'+(this.count++)+'"><i class="fa fa-bars"></i><input class="inboxInput" type="text" value="Nueva Lista"></li>');
			this.inboxInput  = this.element.find('.inboxInput');
			this.LiElInbox   = this.element.find('.inboxLiEl');
			
			this.inboxInput.focus();
			this.inboxInput.keyup( this._addElemetListLi.bind(this) );
			this.inboxInput.focusout( this._addElemetListLi.bind(this) );
			this.LiElInbox.dblclick( this._editElement.bind(this) );
		},
		_addElemetListLi :function(e){
			if(e.keyCode == 13 || e.keyCode === undefined ){
				this.inboxInput.parent().append( '<span>' + this.inboxInput.val() + '</span>' );
				this.inboxInput.remove();
			}
		},
		_editElement : function(e){

			if(this.element.find('.inboxInput').length === 0){

				this.idEl = e.currentTarget.id;
				this.uniqueElement = this.element.find('#'+this.idEl);
				this.textInfo = this.uniqueElement.find('span');
				this.uniqueElement.append('<input class="inboxInput" type="text" value="'+this.textInfo.text()+'"">');
				this.textInfo.remove();
			
				this.inboxInput  = this.element.find('.inboxInput');
				this.inboxInput.focus();
				this.inboxInput.keyup( this._addElemetListLi.bind(this) );
				this.inboxInput.focusout( this._addElemetListLi.bind(this) );
			}
		}
	}
});*/

Class(UI,'InboxTodo').inherits(Widget)({
	HTML:'<div>\
				<ul class="list-inbox">\
					<li><i class="fa fa-inbox"></i>Bandeja de entrada</li>\
				</ul>\
				<div class="add-list">\
					<i class="fa fa-plus-square"></i>Añadir una lista...\
				</div>\
		</div>',
	ELEMENT_CLASS:'inbox-todo',
	prototype:{
		init:function(config){
			Widget.prototype.init.call(this,config);
			console.log('inicializador lista inbox');

			this.inboxUlEl      = this.element.find('.list-inbox');
			this.inboxButtonAdd = this.element.find('.add-list');

			this._bindEvents();
			this.count = 0;
		},

		_bindEvents : function(){
			this.inboxButtonAdd.click( this._addElemetList.bind(this) );
		},
		_addElemetList : function(){
			liEl = new UI.inboxList({ id : (this.count++) });
			liEl.render( this.inboxUlEl );
			liEl.element.find('.inboxInput').focus();
		}
	}
});