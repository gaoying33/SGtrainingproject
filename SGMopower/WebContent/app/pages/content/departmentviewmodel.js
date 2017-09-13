define([], function() {

	var PageViewModel = function(params) {
		var self = this;
		
		self.url = cube.gatewayURL + "/department/";
		self.args = cube.obj({"deptParentId": params.depId()});
		
		self.columns = [
	        {	name: "depname", caption: "部门名称", nullable:false, width:"200px"},
	        {	name: "departdesc", caption: "描述"},
	        {	name: "deptParentId", caption: "父ID", visible: false, value: params.depId}
    	];
		
	    self.fields = [
	    	{	name: "depname", caption: "部门名称", editorType: "TextEditor"}
	    ];
		
		cube.subscribe(params.depId, function(){
			self.args({"deptParentId": params.depId()});
		});
		
//		PubSub.subscribe("1", 'depIdChange', function(topics , data){
//			self.depId(data);
//			self.args("deptParentId="+data);
////			cube.getPageViewModelByNode($("#grid")).load({filter:{deptParentId:data}});
//		});
	};

	return PageViewModel;
});
