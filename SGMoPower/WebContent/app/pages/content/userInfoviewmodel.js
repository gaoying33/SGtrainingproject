define(["RESTClient"], function(RESTClient) {

	var PageViewModel = function(params) {
		var self = this;
		
		self.url = cube.gatewayURL + "/employee/";
		self.id = cube.obj(params.id);
			
		
		self.fields = [
			{ name : "userName", caption : "用户名", nullable : false }, 
			{ name : "ID", caption : "身份证", editorType:"LabelEditor",nullable : false,readOnly: true }, 
			{ name : "RealName", caption : "真实姓名",  editorType:"LabelEditor",nullable : false,readOnly: true }, 
			{ name : "userPass", caption : "密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			{ name : "rePass", caption : "确认密码", readOnly: false, editorType:"TextEditor",textMode:"password"}, 
			{ name : "tel", caption : "电话",validType: "MOBILE"}, 
			{ name : "sex", caption : "性别",editorType: "DropDownEditor",list:[{value:'1',text:'男'},{value:'2',text:'女'}], }, 
		];
		
		self.saved = function() {
			cube.indicate("保存成功");
		}
		
		self.click = function(){
			cube.getPageViewModelByNode($("#form")).submitForm();
		}
	};
	
	return PageViewModel;
});
