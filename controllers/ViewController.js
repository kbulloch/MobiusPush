app.controller("ViewCtrl", function ViewCtrl($scope) {

  $scope.choices = [
    { id: "choice1" }
  ]

  $scope.addChoice = function() {
    var newID = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newID});
  }

  $scope.vendors = [
    { name: "Bigsly", type: "Taxes", rating: 4, cost: 0, location: "Portland" },
    { name: "Wainwright", type: "Taxes", rating: 3, cost: 0, location: "Portland" },
    { name: "Townshend", type: "Taxes", rating: 5, cost: 0, location: "Portland" },
    { name: "H&R Block", type: "Taxes", rating: 3, cost: 0, location: "Portland" },
    { name: "Moonfield", type: "Payroll", rating: 4, cost: 0, location: "Portland" },
    { name: "Penniwise", type: "Payroll", rating: 4, cost: 0, location: "Portland" },
    { name: "PayPlus", type: "Payroll", rating: 3, cost: 0, location: "Portland" },
    { name: "Money Matters LLC", type: "Payroll", rating: 2, cost: 0, location: "Portland" },
    { name: "Cromulux", type: "Offices", rating: 5, cost: 0, location: "Portland" },
    { name: "Samsonite", type: "Offices", rating: 5, cost: 0, location: "Portland" },
    { name: "Swingmark Spaces", type: "Offices", rating: 4, cost: 0, location: "Portland" },
    { name: "Elwood Inc", type: "Offices", rating: 3, cost: 0, location: "Portland" },
    { name: "Morewood and Graybles", type: "Legal", rating: 4, cost: 0, location: "Portland" },
    { name: "Jameson and Sons", type: "Legal", rating: 3, cost: 0, location: "Portland" },
    { name: "Finklestein, French and Poe", type: "Legal", rating: 4, cost: 0, location: "Portland" },
    { name: "Budget Legal", type: "Legal", rating: 2, cost: 0, location: "Portland" }
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
