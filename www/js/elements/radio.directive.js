(function () {
    'use strict';

    angular
        .module('app')
        .directive('radio', radio);

    radio.$inject = ['$stateParams', 'CFG'];

    function radio($stateParams, CFG) {

        var directive = {
            restrict: 'E',
            templateUrl: 'templates/directives/radio.directive.html',
            scope: {},
            link: link
        };
        return directive;

        function link($scope, $element, $attr) {

            $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];
        }
    }

})();