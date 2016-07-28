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
            var promise = $q.when(getData());

            promise.finally(function() {
                $log.log('finally:', arguments);
            });

            promise.then(function() {
                    $log.log('then 5:', arguments);
                    return $q.reject(arguments);
                })
                .then(function() {
                    $log.log('then resolve 5.1:', arguments);
                })
                .then(function() {
                    $log.log('then resolve 5.2:', arguments);
                }, function() {
                    $log.log('then reject 5.2:', arguments);
                })
                .then(function() {
                    $log.log('then resolve 5.3:', arguments);
                }, function() {
                    $log.log('then reject 5.3:', arguments);
                })
                .finally(function() {
                    $log.log('finally 5:', arguments);
                });


            var promise2 = promise.then(function() {
                $log.log('then 4:', arguments);
                return $q.reject(arguments);
            });

            promise2.then(function() {
                    $log.log('then resolve 4.1:', arguments);
                }, function() {
                    $log.log('then reject 4.1:', arguments);
                })
                .then(function() {
                    $log.log('then resolve 4.1.1:', arguments);
                }, function() {
                    $log.log('then reject 4.1.1:', arguments);
                });

            promise2.then(function() {
                    $log.log('then resolve 4.2:', arguments);
                    return promise;
                }, function() {
                    $log.log('then reject 4.2:', arguments);
                })
                .then(function() {
                    $log.log('then resolve 4.2.1:', arguments);
                }, function() {
                    $log.log('then reject 4.2.1:', arguments);
                })
                .finally(function() {
                    $log.log('finally 4:', arguments);
                });

            promise.then(function() {
                    $log.log('then 3:', arguments);
                    return $q.reject(arguments);
                })
                .then(function() {
                    $log.log('then resolve 3.1:', arguments);
                }, function() {
                    $log.log('then reject 3.1:', arguments);
                })
                .then(function() {
                    $log.log('then resolve 3.2:', arguments);
                }, function() {
                    $log.log('then reject 3.2:', arguments);
                })
                .finally(function() {
                    $log.log('finally 3:', arguments);
                });

            promise.then(function() {
                    $log.log('then 2:', arguments);
                })
                .then(function() {
                    $log.log('then 2.1:', arguments);
                });

            promise.then(function() {
                    $log.log('then 1:', arguments);
                })
                .then(function() {
                    $log.log('then 1.1:', arguments);
                });
        }

        function getData() {
            return 'data:xxx';
        }
    }

})();
