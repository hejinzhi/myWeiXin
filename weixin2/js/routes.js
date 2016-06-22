var app = angular.module('myApp.routes', []);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.stateName;

	$stateProvider
		.state("tab", {
			url: "/tab",
			abstract: true,
			templateUrl: "templates/tabs.html",
		})
		.state('tab.message', {
			url: '/message',
			views: {
				'tab-message': {
					templateUrl: 'templates/tab-message.html',
					controller: "indexCtrl"
				}
			}
		})
		.state('tab.friend', {
			url: '/friend',
			views: {
				'tab-friend': {
					templateUrl: 'templates/tab-friend.html'

				}
			}
		})
		.state('tab.find', {
			url: '/find',
			views: {
				'tab-find': {
					templateUrl: 'templates/tab-find.html'

				}
			}
		})
		.state('tab.setting', {
			url: '/setting',
			views: {
				'tab-setting': {
					templateUrl: 'templates/tab-setting.html'

				}
			}
		})
		.state('msg-detail', {
			url: '/msg-detail/:name',
			templateUrl:"templates/message-detail.html",
			controller:'detailCtrl'
		});

	$urlRouterProvider.otherwise("/tab/message");
});