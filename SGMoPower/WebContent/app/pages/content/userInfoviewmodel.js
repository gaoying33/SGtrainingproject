define(["RESTClient"], function(RESTClient) {

	var PageViewModel = function(params) {
		var self = this;
		
		self.url = cube.userGatewayURL + "/tbuser/";
		self.id = cube.obj("1");
			
		
		self.fields = [
			{ name : "loginName", caption : "用户名", nullable : false }, 
			{ name : "cardID", caption : "身份证", editorType:"LabelEditor",nullable : false,readOnly: true }, 
			{ name : "realName", caption : "真实姓名",  editorType:"LabelEditor",nullable : false,readOnly: true }, 
			{ name : "accountBalance", caption : "余额",readOnly: true }, 
			{ name : "vipLevel", caption : "VIP等级", readOnly: true }, 
			{ name : "phoneNum", caption : "电话",validType: "MOBILE"}, 
			{ name : "sex", caption : "性别",editorType: "DropDownEditor",list:[{value:'1',text:'男'},{value:'2',text:'女'}], }, 
		];
	  
	  self.saveUserInfo = function() {
		   	cube.indicate("保存成功");
		}
	  
	  self.returnUserInfo = function() {
		   app.setLocation("index.html#map");
		}
	 
	};
	
	return PageViewModel;
});
