(function () {
    'use strict';

    angular
        .module('app')
        .directive('dragdrop', dragdrop);

    dragdrop.$inject = ['$stateParams', 'CFG'];

    function dragdrop($stateParams, CFG) {

        var directive = {
            restrict: 'E',
            templateUrl: 'templates/directives/dragdrop.directive.html',
            scope: {},
            link: link
        };

        return directive;


        function link($scope, $element, $attr) {

            $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];

            $scope.onDropComplete = function (indexTarget, evt) {

                var indexSource = evt.data;

                if (angular.isUndefined($scope.data.dropoptions[indexTarget].selected))
                    $scope.data.dropoptions[indexTarget].selected = [];

                $scope.data.dropoptions[indexTarget].selected.push($scope.data.dragoptions[indexSource]);

                $scope.data.dragoptions.splice(indexSource, 1);
            };
        }

    }

})();