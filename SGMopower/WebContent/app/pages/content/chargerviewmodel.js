define([], function() {
  
	
	var PageViewModel = function(params) {
		
		
		var self = this;

	     
		self.fields = [
			{ name : "licensePlate", caption : "车牌号码", nullable : false,validType:"NOTNULL"}, 
			{ name : "location", caption : "车辆位置", nullable : false,validType:"NOTNULL"}, 
			{ name : "powerValue", caption : "充电电量", nullable : false,validType:"NOTNULL"}, 
			{ name : "powerTime", caption : "充电时间", editorType : "DateTimeEditor" },
			{ name : "telNumber", caption : "联系方式", editorType : "DateTimeEditor" },
			{ name : "other", caption : "其他说明"}
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
