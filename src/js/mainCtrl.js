;
(function() {
    mainCtrl.$inject = ['$scope'];

    angular.module('myApp', [])
        .controller('mainCtrl', mainCtrl);

    return void(0);

    function mainCtrl($scope) {
        $scope.name = 'my angular app';
    }
})();
