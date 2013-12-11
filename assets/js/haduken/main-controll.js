Class(UI,'MainControll').inherits(Widget)({
		HTML : '<div class="main-controll">\
					<input class="tareaInput" type="text" placeholder="Add Elemet">\
					<buttton class="main-button"><i class="fa fa-plus-square fa-1x"></i> Agregar </button>\
				</div>',
		prototype : {
			init : function(config){
				
				Widget.prototype.init.call(this,config);
				//this.element.attr('id',this.id );
				console.log('inicia MainControll');
				this.buttonEl = this.element.find('buttton');
				this.inputEl  = this.element.find('.tareaInput');
				
												
				/*this.list = new List();
				this.list.render(this.element);
				this.listar = this.element.find('.list-todo ul');*/


				this._bindEvents();

				return true;
			},

			_bindEvents : function(){
				this.buttonEl.click(this._addElement.bind(this));
				this.inputEl.keyup(this._addElement.bind(this));
			},

			_addElement : function(e){
								
				if(e.keyCode == 13 || e.keyCode === undefined){
					this.listar.append('<li>'+this.inputEl.val()+'</li>');
					this.inputEl.val('');
				}
			}

		}
});