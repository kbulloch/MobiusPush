var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider) {
  $stateProvider.state("index", {
    url: "",
    views: {
      "jumbotron": {
        templateUrl: "partials/jumbotron.html"
      },
      "main": {
        templateUrl: "partials/main.html"
      },
      "business": {
        templateUrl: "partials/business.html"
      },
      "result": {
        templateUrl: "partials/result.html"
      },
      "vendor": {
        templateUrl: "partials/vendor.html"
      },
      "vendor_added": {
        templateUrl: "partials/vendor_added.html"
      },
      "report": {
        templateUrl: "partials/report.html"
      }
    }
  })
});

app.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "partials/navigation.html"
  }
});
