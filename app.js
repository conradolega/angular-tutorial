angular.module('angularTutorial', [])
    .controller('TutorialCtrl', function TutorialCtrl($scope, $timeout) {
        $scope.data = {};
        var updateClock = function() {
            $scope.data.clock = new Date();
            $timeout(function() {
                updateClock();
            }, 1000);
        };
        updateClock();
    });
