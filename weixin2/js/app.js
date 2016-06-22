var app = angular.module('myApp', ['ionic', 'myApp.controllers', 'myApp.routes',
	'myApp.services', 'myApp.directives'
]);

app.config(function($ionicConfigProvider) {
	$ionicConfigProvider.tabs.position("bottom");
	$ionicConfigProvider.tabs.style("standard");
	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.views.transition('android');
});

app.run(function($ionicPlatform, $http, localStorageService,messageService) {

	$http.get('data/msg.json').then(function(resp) {
		//console.log(resp.data);
		for (var i = 0; i < resp.data.length; i++) {
			localStorageService.update('message_' + i, resp.data[i]);
		}
		
		//messageService.init(resp.data);
		
		messageService.init(angular.toJson(resp.data) );
		
		//console.log(localStorageService.get('messageID'));
		
	});

	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});