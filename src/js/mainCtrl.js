;
(function() {
    mainCtrl.$inject = [
        '$log', '$scope'
    ];

    angular.module('myApp', [])
        .controller('mainCtrl', mainCtrl);

    return void(0);

    function mainCtrl(
        $log, $scope
    ) {
        var scope = $scope;

        var ctrl = scope.ctrl = {
            name: 'my angular app',
            promiseDemo: promiseDemo,
        };

        return void(0);

        function promiseDemo() {
            $log.log('promiseDemo');
        }
    }

})();
