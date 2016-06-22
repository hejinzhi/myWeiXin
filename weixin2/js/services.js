var app = angular.module('myApp.services', []);

app
	.factory('userService', function($http) {

		var users = [];
		return {
			getUsers: function() {
				return $http.get('data/msg.json').then(function(resp) {
					users = resp.data;
					return resp.data;
				});
			},
			getUser: function(index) {
				return users[index];
			}
		};

	})
	.factory('localStorageService', [function() {
		return {
			get: function(key, defaultvalue) {
				var stored = localStorage.getItem(key);
				try {
					stored = angular.fromJson(stored);
				} catch (error) {
					stored = null;
				}
				if (defaultvalue && stored === null) {
					stored = defaultvalue;
				}
				return stored;

			},
			update: function(key, value) {
				if (value) {
					localStorage.setItem(key, angular.toJson(value));
				}
			},
			clear: function(key) {
				localStorage.removeItem(key);
			}
		}
	}])
	.factory('messageService', [function() {
		return {
			init: function(messages) {
				localStorage.setItem('messageID', messages); 
			}
		}

	}]);