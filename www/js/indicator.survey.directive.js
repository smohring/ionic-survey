(function () {
    'use strict';

    angular
        .module('app')
        .directive('indicator', indicator);

    indicator.$inject = ['$stateParams', 'CFG'];

    function indicator($stateParams, CFG) {

        var directive = {
            link: link,
            templateUrl: 'templates/directives/indicator.survey.html',
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link($scope, $element, $attrs) {

            $scope.numElements = new Array(CFG.survey.length);
            $scope.activeElement = $stateParams.id;

        }
    }
})();