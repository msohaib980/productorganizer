
var app = angular.module('productOrganizer',[]);
app.controller("mainCtrl", function ($scope){

  $scope.product = {}
  $scope.input = [
    {
      name:"shoes",
      desc:"cloth",
      price:"50",
      category:"footwear",
      image:"http://www.fivedollartraveller.com/wp-content/uploads/2014/06/Mens-Moab-Mid-Gore-Tex-M.jpg"
    },
    {
      name:"shoes",
      desc:"plastic",
      price:"20",
      category:"footwear",
      image:"http://nsrgtrading.com/wp-content/uploads/2014/09/66.jpg"
    },
    {
      name:"shoes",
      desc:"leather",
      price:"30",
      category:"footwear",
      image:"http://cdn.shopclues.net/images/detailed/12753/RCFS00003_1424802973.jpg"
    },
    {
      name:"sleepers",
      desc:"fiber",
      price:"25",
      category:"footwear",
      image:"https://s-media-cache-ak0.pinimg.com/736x/f3/b1/f4/f3b1f4567ce5456bfd96bf20d355e90e.jpg"
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


});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html ',
      // controller: 'homeCtrl'
    })
    .state('detailpage', {
      url: '/detailpage',
      templateUrl: '/html/detailpage.html',
    })



  // $urlRouterProvider.otherwise('/');
});
