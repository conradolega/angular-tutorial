angular.module('angularTutorial', [])
    .controller('TutorialCtrl', function TutorialCtrl($scope, $timeout) {
        var updateClock = function() {
            $scope.clock = new Date();
            $timeout(function() {
                updateClock();
            }, 1000);
        };
        updateClock();
    });
