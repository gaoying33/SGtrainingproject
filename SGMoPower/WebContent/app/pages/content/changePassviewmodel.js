define(["RESTClient"], function(RESTClient) {

	var PageViewModel = function(params) {
		var self = this;
		
		self.url = cube.gatewayURL + "/employee/";
		self.id = cube.obj(params.id);
			
		
		self.fields = [
			{ name : "userPass", caption : "原始密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			{ name : "newPass", caption : "新密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			{ name : "rePass", caption : "确认新密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			
			
		];
	 
	  self.saveUserInfo = function() {
		   cube.getPageViewModelByNode($("#form")).submitForm();
		}
	  
	  self.returnUserInfo = function() {
		      app.setLocation("index.html#map");
		}
	  
		
	};
	
	return PageViewModel;
});
