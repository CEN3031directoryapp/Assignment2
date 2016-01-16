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

      var buildingLong = $scope.buildingLong;
      var buildingLat = $scope.buildingLat;

      $scope.listings.push(
        { code : buildingCode,
          name : buildingName,
          address : buildingAddr,
          coordinates :
          {
            longitude : buildingLong,
            latitude  : buildingLat
          }
        }
      );

      $scope.buildingName = '';
      $scope.buildingCode = '';
      $scope.buildingAddress = '';

      $scope.buildingLong = '';
      $scope.buildingLat = '';
    };

    $scope.deleteListing = function(element) {
      var index = $scope.listings.indexOf(element);
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(element) {
      var item = element;

      var address = item.address;
      var longitude = item.coordinates.longitude;
      var latitude = item.coordinates.latitude;

      if(address != null)
      {
        $scope.addr = address;
      }
      else {
        $scope.addr = "";
      }

      if(longitude != null)
      {
        $scope.long = longitude;
      }
      else{
        $scope.long = "";
      }

      if(latitude != null)
      {
        $scope.lat = latitude;
      }
      else{
        $scope.lat = "latitude";
      }
    };
  }
]);
