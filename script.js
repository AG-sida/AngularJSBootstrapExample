
//Setting the ROUTE variable
var setUpApp = angular.module('setUpApp', ['ngRoute']);

setUpApp.config(function($routeProvider){
  $routeProvider
  //route for homepage
  .when('/',{
            templateUrl : 'views/welcome.html',
            controller : 'welcomeController'
        })
  .when('/welcome',{
            templateUrl : 'views/welcome.html',
            controller : 'welcomeController'
        })

        // route for the tech page
        .when('/view1',{
            templateUrl : 'views/view1.html ',
            controller :'view1Controller'
        })
        .when('/view2',{
          templateUrl:'views/view2.html',
          controller:'view2Controller'
        })
       
});
        // create the controller and inject Angular's $scope
setUpApp.controller('welcomeController', function($scope) {

    $scope.name="Welcome";

    // create a message to display in our view
    $scope.message = 'Welcome';
});

setUpApp.controller('view1Controller', function($scope) {

    $scope.name="View 1";

    // create a message to display in our view
    $scope.message = 'Welcome To View 1!';
});

setUpApp.controller('view2Controller', function($scope,$http) {
    $scope.name="View 2";

    $scope.message = 'Welcome to view 2!';
 
});

