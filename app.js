angular.module('angularTutorial', [])
    .controller('TutorialCtrl', function TutorialCtrl($scope, $timeout) {
        $scope.data = {timer: 0};
        var updateTimer = function() {
            $scope.data.timer++;
            $timeout(updateTimer, 1000);
        };
        updateTimer();
    });
