define([], function() {

	var PageViewModel = function(params) {
		var self = this;

//		self.url = cube.gatewayURL_emp + "/employee/";
		//修改成网关地址，同一路由
		//self.url = cube.gatewayURL + "/employee/";	
		//self.args = cube.obj({"depId": params.depId});

		
		self.columns = [ 
			
			{ name : "orderID", caption : "订单编号", nullable : false }, 
			{ name : "orderTime", caption : "下单时间", editorType : "DateTimeEditor" }, 
			{ name : "orderAddress", caption : "下单地址"}, 
			{ name : "orderAddress", caption : "下单地址"}, 
			{ name : "orderCost", caption : "充电花费"}, 
			{ name : "powerValue", caption : "充电电量"}, 
			{ name : "powerTime", caption : "充电时间"}, 
			{ name : "orderStatus", caption : "订单状态"}, 
			
		];

		
		
	
		
		
		self.onItemClick = function(e) {
			if (e == "onNewClick") {
				app.setLocation("#empDetail");
			} else if (e == "onDeleteClick") {
				cube.getPageViewModelByNode($("#empgrid")).delCheckedItem();
			}
		};
		

		cube.subscribe(params.depId, function(){
			self.args({"depId": params.depId()});
		});
//		PubSub.subscribe("2", 'depIdChange', function(topics , data){
//			self.args("depId="+data);
//		});
	};

	return PageViewModel;
});
