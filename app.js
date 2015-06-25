angular.module('angularTutorial', [])
    .controller('TutorialCtrl', function TutorialCtrl($scope, $timeout) {
        $scope.data = {timer: 0};
        var updateTimer = function() {
            $scope.data.timer++;
            $timeout(updateTimer, 1000);
        };
        updateTimer();
    })
    .controller('NestedCtrl', function NestedCtrl($scope) {
        $scope.data.name2 = 'Name2';
    });
