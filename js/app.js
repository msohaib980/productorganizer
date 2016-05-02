
var app = angular.module('productOrganizer',[]);
app.controller("mainCtrl", function ($scope){

  $scope.product = {}
  $scope.input = [
    {
      name:"shoes",
      desc:"cloth",
      price:"50",
      category:"footwear",
      image:"image"
    },
    {
      name:"shoes",
      desc:"plastic",
      price:"20",
      category:"footwear",
      image:"image"
    },
    {
      name:"shoes",
      desc:"leather",
      price:"30",
      category:"footwear",
      image:"image"
    },
    {
      name:"sleepers",
      desc:"fiber",
      price:"25",
      category:"footwear",
      image:"image"
    }
  ];

  $scope.addproduct = function () {
    $scope.input.push($scope.product)
    $scope.product = {}
  }

//  Delete functionn
$scope.removeEntry = function (productdetails) {
var $index = $scope.input.indexOf(productdetails);
  $scope.input.splice($index,1)
};


})
