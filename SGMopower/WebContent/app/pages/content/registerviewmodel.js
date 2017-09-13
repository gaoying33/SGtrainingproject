define([], function() {
  
	
	var PageViewModel = function(params) {
		
		
		var self = this;

	     
		self.fields = [
			{ name : "loginName", caption : "用户名", nullable : false,validType:"^.{3,20}$",RvalidType:"" }, 
			{ name : "cardID", caption : "身份证", nullable : false, validType:"IDCARD"}, 
			{ name : "realName", caption : "真实姓名", nullable : false,validType:"NOTNULL"}, 
			{ name : "loginPSW", caption : "密码", readOnly: false, editorType:"TextEditor",textMode:"password",validType:"NOTNULL"}, 
			{ name : "rePass", caption : "确认密码", readOnly: false, editorType:"TextEditor",textMode:"password",validType:"NOTNULL"}, 
			{ name : "phoneNum", caption : "电话",validType: "MOBILE"}, 
			{ name : "sex", caption : "性别",editorType: "DropDownEditor",list:[{value:'1',text:'男'},{value:'2',text:'女'}], }, 
          ];
		
		self.showModalDialog = function() {
			var f = cube.getPageViewModelByNode($("#form"));
			if(typeof(f.data.userPass)=="undefined" || f.data.userPass=='' )
				 $("#loginPSWHint").text("请输入密码");
			else
				 $("#loginPSWHint").text("");
			 if(f.data.userPass != f.data.rePass)
				 $("#loginPSWHint").text("两次密码需保证一致");
			 else
				 $("#loginPSWHint").text("");

		}

	};

	return PageViewModel;
});
