(function () {
    'use strict';

    angular
        .module('app')
        .directive('slider', slider);

    slider.$inject = ['$stateParams', 'CFG'];

    function slider($stateParams, CFG) {

        var directive = {
            restrict: 'E',
            templateUrl: 'templates/directives/slider.directive.html',
            scope: {},
            link: link
        };
        return directive;


        function link($scope, $element, $attr) {

            $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];
        }
    }

})();