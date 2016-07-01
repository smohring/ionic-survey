(function () {
    'use strict';

    angular
        .module('app')
        .directive('rangeslider', rangeslider);

    rangeslider.$inject = ['$stateParams', 'CFG'];

    function rangeslider($stateParams, CFG) {

        var directive = {
            restrict: 'E',
            templateUrl: 'templates/directives/rangeslider.directive.html',
            scope: {},
            link: link
        };
        return directive;


        function link($scope, $element, $attr) {

            $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];
        }
    }

})();