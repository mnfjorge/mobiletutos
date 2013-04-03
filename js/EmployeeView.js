var EmployeeView = function(employee) {
	
	this.initialize = function(){
		this.el = $('<div/>');
	};
	
	this.render = function(){
		this.el.html(EmployeeView.template(employee));
		this.el.on('click', '.add-location-btn', this.addLocation);
		return this;
	};
	
	this.addLocation = function(event) {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(
			function(position) {
				$('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
			},
			function() {
				alert('Error getting location');
			}
		);
		return false;
	};

	this.initialize();
}
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());