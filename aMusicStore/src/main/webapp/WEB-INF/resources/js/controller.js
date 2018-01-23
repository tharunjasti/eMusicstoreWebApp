/**
 * Created by Le on 1/11/2016.
 */

var cartApp = angular.module ("cartApp", []);

cartApp.controller("cartCtrl", function ($scope, $http){

    $scope.refreshCart = function (cartId) {
        $http.get('/aMusicStore/rest/cart/'+$scope.cartId).success(function (data) {
           $scope.cart=data;
        });
    };

    $scope.clearCart = function () {
        $http.delete('/aMusicStore/rest/cart/'+$scope.cartId).success($scope.refreshCart($scope.cartId));
    };

    $scope.initCartId = function (cartId) {
        $scope.cartId = cartId;
        $scope.refreshCart(cartId);
    };

    $scope.addToCart = function (productId) {
        $http.put('/aMusicStore/rest/cart/add/'+productId).success(function (data) {
            $scope.refreshCart($http.get('/aMusicStore/rest/cart/cartId'));
            alert("Product successfully added to the cart!")
        });
    };

    $scope.removeFromCart = function (productId) {
        $http.put('/aMusicStore/rest/cart/remove/'+productId).success(function (data) {
            $scope.refreshCart($http.get('/aMusicStore/rest/cart/cartId'));
        });
    };
});