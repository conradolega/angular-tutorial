angular.module('angularTutorial', [])
    .factory('Data', function() {
        var data = [
            {name: 'CASAA', rating: 4},
            {name: 'Shopping Center', rating: 4},
            {name: 'Lutong Bahay', rating: 3},
            {name: 'Katag', rating: 3},
            {name: 'Iskomai', rating: 3},
            {name: 'Tinapay', rating: 4},
            {name: 'Chocolate Kiss', rating: -1},
            {name: 'ROC', rating: -1},
            {name: 'Beach House', rating: 4},
            {name: 'Snack Shack', rating: 4}
        ];

        data.add = function(item) {
            data.push(item);
        }

        return data;
    })
    .filter('showStars', function() {
        return function(rating) {
            return rating > 0 ? new Array(rating + 1).join('*') : 'N/A';
        };
     })
    .directive('food', function() {
        return {
            restrict: 'E',
            template: '<div>{{ food.name }} (Rating: {{ food.rating | showStars }})</div>',
            link: function(scope, element) {
                element.bind('mouseenter', function() {
                    element.css('font-weight', 'bold');
                });
                element.bind('mouseleave', function() {
                    element.css('font-weight', 'normal');
                });
            }
        };
    })
    .controller('TutorialCtrl', function TutorialCtrl($scope, Data) {
        $scope.foods = Data;
        $scope.add = function() {
            Data.add($scope.newItem);
        };
    })

