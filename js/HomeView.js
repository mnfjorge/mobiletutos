var HomeView = function(store){
	
	this.initialize = function(){
		this.el = $('<div/>');
	};
	
	this.initialize();
	
	this.render = function(){
		this.el.html(HomeView.template);
		this.el.on('keyup', '.search-key', this.findByName);
		return this;
	};
	
	this.findByName = function() {
	    if($('.search-key').val() == ''){
			$('.employee-list').html('');
			return;
		}
		
		store.findByName($('.search-key').val(), function(employees) {
        	$('.employee-list').html(HomeView.liTemplate(employees));
        });
    };
	
};
HomeView.template = Handlebars.compile($('#home-tpl').html());
HomeView.liTemplate = Handlebars.compile($('#employee-li-tpl').html());