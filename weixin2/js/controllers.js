var app = angular.module('myApp.controllers', []);

app.controller('indexCtrl', function($scope, $http, $state, $ionicPopup, localStorageService) {

		/*$http.get('http://10.86.16.154/MobileDataServer/test/getMsgData').then(function(resp) {
			$scope.msgs = resp.data;
			console.log(JSON.stringify($scope.msgs));
		});*/

		/*$http.get('data/msg.json').then(function(resp) {
			$scope.msgs = resp.data;
		});*/

		//$scope.msgs=userService.getUsers();
		//localStorage.getItem('messageID')得到的只是普通的字符串，要通過eval轉換成json對象，才能使用push功能
		//var initData = eval(localStorage.getItem('messageID'));

		var initData = angular.fromJson(localStorage.getItem('messageID'));
		/*var insertData = {
			"ID": 7,
			"IMG": "img/adam.png",
			"LAST_MESSAGE": "下班回家吃飯sdasda",
			"LAST_TIME": "昨天",
			"MISS_MSG_COUNT": 19,
			"NAME": "adam"
		};*/

		$scope.msgs = initData;
		//initData.push(insertData);

		//localStorage.setItem('messageID', angular.toJson(initData));

		//$scope.msgs.splice(0,1);

		$scope.goPage = function(params) {
			$state.go('msg-detail', {
				'name': params
			});
		};

		$scope.popupMessage = function(msg) {
			//$scope.popup = {};
			$scope.popup.index = $scope.msgs.indexOf(msg);
			$scope.popup.optionsPopup = $ionicPopup.show({
				templateUrl: "templates/popup.html",
				scope: $scope,
			});
		};

		$scope.$on("$ionicView.beforeEnter", function() {
			//$scope.messages = messageService.getAllMessages();
			$scope.popup = {};
		});

	})
	.controller('detailCtrl', function($scope, $stateParams, $http, $ionicScrollDelegate) {
		$scope.name = $stateParams.name;
		//var resp = [];
		$scope.msgs = [];
		$http.get('data/msg-detail.json').then(function(resp) {
			//$scope.msgs = resp.data;
			//resp = eval(resp.data);
			$scope.msgs = eval(resp.data);

			var sendMsg = {
				"time": "09:27",
				"timeFlag": "Y",
				"myMessage": "有在看比賽嗎aaa？",
				"myMessageFlag": "Y",
				"yourMessage": "A",
				"yourMessageFlag": "Y"
			};

			//resp.push(sendMsg);
			//$scope.msgs.push(sendMsg);
			//$scope.msgs = resp;

		});

		$scope.sendMsg = function(msg) {
			//console.log(msg);

			var sendMsg = {
				"time": "09:27",
				"timeFlag": "N",
				"myMessage": msg,
				"myMessageFlag": "Y"
			};

			$scope.msgs.push(sendMsg);
			$scope.send_content = null;
			$ionicScrollDelegate.scrollBottom();
		};

	});