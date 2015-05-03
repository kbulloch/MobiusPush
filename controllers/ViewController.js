app.controller("ViewCtrl", function ViewCtrl($scope) {

  $scope.vendors = [
    { name: "Bigsly", type: "Taxes" },
    { name: "Wainwright", type: "Taxes" },
    { name: "Townshend", type: "Taxes" },
    { name: "H&R Block", type: "Taxes" },
    { name: "Moonfield", type: "Payroll" },
    { name: "Penniwise", type: "Payroll" },
    { name: "PayPlus", type: "Payroll" },
    { name: "Money Matters LLC", type: "Payroll" },
    { name: "Cromulux", type: "Offices" },
    { name: "Samsonite", type: "Offices" },
    { name: "Swingmark Spaces", type: "Offices" },
    { name: "Elwood Inc", type: "Offices" },
    { name: "Morewood and Graybles", type: "Legal" },
    { name: "Jameson and Sons", type: "Legal" },
    { name: "Finklestein, French and Poe", type: "Legal" },
    { name: "Budget Legal", type: "Legal" }
  ];

  $scope.getVendors = function() {
    $scope.business = false;
    $scope.result = true;
  }

  $scope.jumbotron = true;
  $scope.main = true;

  $scope.showMain = function() {
    $scope.jumbotron = true;
    $scope.main = true;
    $scope.business = false;
    $scope.vendor = false;
    $scope.result = false;
  };

  $scope.showBusiness = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = true;
    $scope.vendor = false;
    $scope.result = false;
  };

  $scope.showVendor = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = true;
    $scope.result = false;
  };

  $scope.showContact = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = false;
    $scope.contact = true;
    $scope.result = false;
  };

});
