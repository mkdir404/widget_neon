UI = {};
Class(UI,'Haduken').inherits(Widget)({
	HTML : ' <div>\
        		<div class="header"></div>\
         		<div class="leftbar"></div>\
         		<div class="rightbar"></div>\
    		</div>',
	ELEMENT_CLASS : 'wrapper',
	prototype:{
		init : function(){

			Widget.prototype.init.call(this);

			this.bind('my_evento',this.addElemento.bind(this));


				/*this.mainControll = new UI.MainControll();
				this.mainControll.render( this.element.find('.rightbar') );*/
			
			//console.log('inicializador Haduken');
			
			this.header = new Header();
			this.header.render(this.element.find('.header'));

			this.inbox = new UI.InboxTodo();
			this.inbox.render(this.element.find('.leftbar'));

			/*this.mainControll = new UI.MainControll();
			this.mainControll.render(this.element);*/
						
			return this;
		},

		addElemento : function(){
			console.log( this.element.find('.rightbar').length);
			this.mainControll = new UI.MainControll();
			this.mainControll.render( this.element.find('.rightbar') );

		}
	}
});