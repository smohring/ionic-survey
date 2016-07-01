(function () {
    'use strict';

    angular
        .module('app')
        .directive('inputfields', inputfields);

    inputfields.$inject = ['$stateParams', 'CFG'];

    function inputfields($stateParams, CFG) {

        var directive = {
            restrict: 'E',
            templateUrl: 'templates/directives/inputfields.directive.html',
            scope: {},
            link: link
        };
        return directive;


        function link($scope, $element, $attr) {

            $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];
        }
    }

})();