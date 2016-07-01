(function () {
    'use strict';

    angular
        .module('app')
        .directive('text', text);

    text.$inject = ['$stateParams', 'CFG'];

    function text($stateParams, CFG) {

        var directive = {
            restrict: 'E',
            templateUrl: 'templates/directives/textarea.directive.html',
            scope: {},
            link: link
        };
        return directive;


        function link($scope, $element, $attr) {

            $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];
        }
    }

})();