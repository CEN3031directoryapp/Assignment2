angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    //vars
    $scope.buildingName='';
    $scope.buildingCode='';
    $scope.buildingAddress='';

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */



    $scope.addListing = function() {
      // console.log($);

      var buildingCode = $scope.buildingCode;
      var buildingName = $scope.buildingName;
      var buildingAddr = $scope.buildingAddress;

      $scope.listings.push({code : buildingCode, name : buildingName, address : buildingAddr});

      $scope.buildingName = '';
      $scope.buildingCode = '';
      $scope.buildingAddress = '';
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      
    };
  }
]);
