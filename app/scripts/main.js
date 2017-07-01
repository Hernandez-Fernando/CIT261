var app = angular.module('scoreApp', ['ngRoute']);

app.controller('appMenu', function($scope) {
	$scope.message = 'Test';
})

// Links
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/players', {
    templateUrl : 'pages/players.html',
    controller  : 'PlayersController'
  })

  .when('/game', {
    templateUrl : 'pages/game.html',
    controller  : 'GameController'
  })
  
    .when('/settings', {
    templateUrl : 'pages/settings.html',
    controller  : 'SettingsController'
})

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
})

  .when('/stadistics', {
    templateUrl : 'pages/stadistics.html',
    controller  : 'StadisticsController'
})

  .otherwise({redirectTo: '/'});
});

// Controllers

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('PlayersController', function($scope) {
  $scope.message = 'Hello from PlayersController';
});

app.controller('GameController', function($scope) {
  $scope.message = 'Hello from GameController';
});

app.controller('SettingsController', function($scope) {
  $scope.message = 'Hello from SettingsController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});

app.controller('StadisticsController', function($scope) {
  $scope.message = 'Hello from Stadisticsontroller';
});