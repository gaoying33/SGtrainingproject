define([], function() {
  
	
	var PageViewModel = function(params) {
		
		
		var self = this;

	     
		self.fields = [
			{ name : "userName", caption : "用户名", nullable : false,validType:"NOTNULL"}, 
			{ name : "ID", caption : "身份证", nullable : false, validType:"IDCARD"}, 
			{ name : "RealName", caption : "真实姓名", nullable : false,validType:"NOTNULL"}, 
			{ name : "userPass", caption : "密码", readOnly: false, editorType:"TextEditor",textMode:"password",validType:"NOTNULL"}, 
			{ name : "rePass", caption : "确认密码", readOnly: false, editorType:"TextEditor",textMode:"password",validType:"NOTNULL"}, 
			{ name : "tel", caption : "电话",validType: "MOBILE"}, 
			{ name : "sex", caption : "性别",editorType: "DropDownEditor",list:[{value:'1',text:'男'},{value:'2',text:'女'}], }, 
          ];
		
		self.showModalDialog = function() {
			
			var f = cube.getPageViewModelByNode($("#form"));
			alert(f.data.userPass);
		}
		/*
		self.saved = function() {
			cube.indicate("保存成功");
		}
		
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
	};

	return PageViewModel;
});
