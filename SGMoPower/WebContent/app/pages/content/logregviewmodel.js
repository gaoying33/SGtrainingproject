define([],function() {
	var PageViewModel = function(params) {
				var self = this;
				self.tabContents = [
				{
					text : '登陆',
					route : 'login',
					templateOptions :
					{
							name : 'app.content.login',
							params : {}
				    }
				},
				{
					text : '注册',
					route : 'register',
					templateOptions :
					{
							name : 'app.content.register',
							params : {}
				    }
				}];
				
				self.selectedTabRoute = 'login';
				self.isHrefRoute = false;
				self.isContentType = false;

				cube.endViewModel(self, params);
			};
			return PageViewModel;
		});