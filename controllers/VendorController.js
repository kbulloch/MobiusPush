app.controller("VendorCtrl", function VendorCtrl($scope) {

  $scope.vendors = [
    { name: "Bigsly", type: "taxes" },
    { name: "Moonfield", type: "payroll" },
    { name: "Cromulux", type: "office-space" },
    { name: "Morewood and Graybles", type: "legal" }
  ];

});
