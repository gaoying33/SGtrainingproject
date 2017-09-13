define([], function() {

	var PageViewModel = function(params) {
		var self = this;

		self.menuItems = [ 
			{
				text : '首页',
				route : "#map",
				hasChildren : false
			} ,{
			text : '我的订单',
			route : "#userOrder",
			hasChildren : false,
		}, {
			text : '我的信息',
			route : "#map",
			hasChildren: true,
			children:cube.array([
				{text: '基本信息', 
				route: "#userInfo",
    			hasChildren: false} ,
    			{text: '修改密码', 
    				route: "#changePass",
        			hasChildren: false} 
				])
			
			
			
		} ];

		self.onSelectItemChanged = function(p_value) {
			app.setLocation(p_value.route);
		}
		
		self.isShowDialog = cube.obj(false);
	
	  
	    self.templateOptions = 
	    {
	    		name: 'app.content.logreg',
	    		params: {}
	    }
		
		self.showModalDialog = function() {
			self.isShowDialog(true);	
		}
		
	};

	
	
	
	return PageViewModel;
});
