app.controller("ViewCtrl", function ViewCtrl($scope) {

  $scope.jumbotron = true;
  $scope.main = true;

  $scope.showMain = function() {
    $scope.jumbotron = true;
    $scope.main = true;
    $scope.business = false;
    $scope.vendor = false;
  };

  $scope.showBusiness = function() {
    $scope.jumbotron = false;
    $scope.main = false;
    $scope.business = true;
    $scope.vendor = false;
  };

  $scope.showVendor = function() {
    $scope.jumbotron = false;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = true;
  };

  $scope.showContact = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = false;
    $scope.contact = true;
  };

});
