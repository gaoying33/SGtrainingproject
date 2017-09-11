define(['./app', "sammy"], function() {
	var PageViewModel = function() {
		var self = this;
		
		self.depId = cube.obj("");
		self.contentUrl = cube.obj("map");
		
		app = Sammy(function(){
          	this.get(/\#([^/]+)/, function() {
				self.contentUrl(this.path.substring(1));
			});
        });
		
        app.run();

	};
	
	var pvm = new PageViewModel();
	
	$(document).ready(function(e){
		cube.startWebPage(pvm);
	});
});
