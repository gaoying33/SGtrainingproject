define([], function() {

	var PageViewModel = function(params) {
		var self = this;
		
		self.url = cube.gatewayURL + "/department/tree";
		
		self.onSelectedChanged = function(p_value){
			params.depId(p_value.id);
			if (app.getLocation().indexOf("#empDetail")!=-1) {
				app.setLocation("#employee");
			}
		}
		
	};

	return PageViewModel;
});
