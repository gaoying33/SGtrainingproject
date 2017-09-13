define([], function() {
  
	
	var PageViewModel = function(params) {
		
		
		var self = this;

		self.showModalDialog = function() {
			alert("success");
			
			
			alert(userName);
			//cube.getPageViewModelByNode($("#form")).submitForm();
		}
		self.fields = [
			{ name: "loginName", caption: "用户名", editorType: "TextEditor", nullable:false,validType:"NOTNULL"},
			{ name : "loginPSW", caption : "密码", editorType:"TextEditor",textMode:"password",nullable : false,validType:"NOTNULL"},
		];
		
		
		
		/*
		self.click = function(){
			cube.getPageViewModelByNode($("#form")).submitForm();
		}
	    
		
		self.rfields = [
			{ name : "num", caption : "用户名*", nullable : false }, 
			{ name : "ID", caption : "身份证*", nullable : false }, 
			{ name : "num", caption : "真实姓名", nullable : false }, 
			{ name : "pass", caption : "密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			{ name : "repass", caption : "确认密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			{ name : "tel", caption : "电话" , validType: "MOBILE"}, 
			{ name : "sex", caption : "性别",editorType: "DropDownEditor" }, 
	 	];*/
		cube.endViewModel(self,params);
	};

	return PageViewModel;
});
