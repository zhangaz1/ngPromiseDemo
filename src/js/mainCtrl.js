;
(function() {
    mainCtrl.$inject = [
        '$log', '$q', '$timeout',
        '$scope',
    ];

    angular.module('myApp', [])
        .controller('mainCtrl', mainCtrl);

    return void(0);

    function mainCtrl(
        $log, $q, $timout,
        $scope
    ) {
        var scope = $scope;

        var ctrl = scope.ctrl = {
            name: 'my angular app',
            promiseDemo: promiseDemo,
        };

        return void(0);

        function promiseDemo() {
            $q.when(getData())
                .then(function() {
                    $log.log(arguments);
                });
        }

        function getData() {
            return 'data:xxx';
        }
    }

})();
