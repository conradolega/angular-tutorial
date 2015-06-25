angular.module('angularTutorial', [])
    .factory('Data', function() {
        return [
            {name: 'CASAA'},
            {name: 'Shopping Center'},
            {name: 'Lutong Bahay'},
            {name: 'Katag'},
            {name: 'Iskomai'},
            {name: 'Tinapay'},
            {name: 'Chocolate Kiss'},
            {name: 'ROC'},
            {name: 'Beach House'},
            {name: 'Snack Shack'}
        ];
    })
    .controller('TutorialCtrl', function TutorialCtrl($scope, $timeout, Data) {
        $scope.foods = Data;
    })

