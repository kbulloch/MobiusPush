app.controller("ViewCtrl", function ViewCtrl($scope) {

  $scope.choices = [
    { id: "choice1" }
  ]

  $scope.addChoice = function() {
    var newID = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newID});
  }

  $scope.vendors = [
    { name: "Fulmann Ltd", type: "Contractor", rating: 4, cost: 0, location: "Portland" },
    { name: "PDX Contractors", type: "Contractor", rating: 4, cost: 0, location: "Portland" },
    { name: "Wormwood and Sons", type: "Answering", rating: 4, cost: 0, location: "Portland" },
    { name: "Freelance Contracts Inc", type: "Contractor", rating: 4, cost: 0, location: "Portland" },
    { name: "Bigsly", type: "Taxes", rating: 4, cost: 0, location: "Portland" },
    { name: "Wainwright", type: "Web Design", rating: 3, cost: 0, location: "Portland" },
    { name: "Townshend", type: "Taxes", rating: 5, cost: 0, location: "Portland" },
    { name: "H&R Block", type: "Taxes", rating: 3, cost: 0, location: "Portland" },
    { name: "Moonfield", type: "SEO", rating: 4, cost: 0, location: "Portland" },
    { name: "Penniwise", type: "Payroll", rating: 4, cost: 0, location: "Portland" },
    { name: "PayPlus", type: "Payroll", rating: 3, cost: 0, location: "Portland" },
    { name: "Money Matters LLC", type: "Payroll", rating: 2, cost: 0, location: "Portland" },
    { name: "Cromulux", type: "Offices", rating: 5, cost: 0, location: "Portland" },
    { name: "Samsonite", type: "Telemarketing", rating: 5, cost: 0, location: "Portland" },
    { name: "Swingmark Spaces", type: "Storage", rating: 4, cost: 0, location: "Portland" },
    { name: "Elwood Inc", type: "Offices", rating: 3, cost: 0, location: "Portland" },
    { name: "Morewood and Graybles", type: "Legal", rating: 4, cost: 0, location: "Portland" },
    { name: "Jameson and Sons", type: "Legal", rating: 3, cost: 0, location: "Portland" },
    { name: "Finklestein, French and Poe", type: "Legal", rating: 0, cost: 0, location: "Portland" },
    { name: "Budget Legal", type: "Legal", rating: 0, cost: 0, location: "Portland" }
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
    $scope.vendor_added = false;
  };

  $scope.showBusiness = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = true;
    $scope.vendor = false;
    $scope.result = false;
    $scope.vendor_added = false;
  };

  $scope.showVendor = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = true;
    $scope.result = false;
    $scope.vendor_added = false;
  };

  $scope.showContact = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = false;
    $scope.contact = true;
    $scope.vendor_added = false;
    $scope.result = false;
  };

  $scope.showVendorAdded = function() {
    $scope.jumbotron = true;
    $scope.main = false;
    $scope.business = false;
    $scope.vendor = false;
    $scope.contact = false;
    $scope.result = false;
    $scope.vendor_added = true;
  }

});
