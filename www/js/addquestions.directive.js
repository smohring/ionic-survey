(function () {
    'use strict';

    angular
        .module('app')
        .directive('addQuestions', addQuestions);

    addQuestions.$inject = ['$stateParams', '$compile', 'CFG'];

    function addQuestions($stateParams, $compile, CFG) {

        var directive = {
            restrict: 'E',
            link: link
        };
        return directive;


        function link($scope, $element, $attrs) {

            angular.forEach(CFG.survey[$stateParams.id].questions, function (question, key) {

                switch (question.type) {

                    case 'checkbox' :

                        var el = $compile('<checkbox question="' + key + '"></checkbox>')($scope);

                        break;
                    case 'radio' :

                        var el = $compile('<radio question="' + key + '"></radio>')($scope);

                        break;
                    case 'textarea' :

                        var el = $compile('<text question="' + key + '"></text>')($scope);

                        break;
                    case 'inputfields' :

                        var el = $compile('<inputfields question="' + key + '"></inputfields>')($scope);

                        break;
                    case 'slider' :

                        var el = $compile('<slider question="' + key + '"></slider>')($scope);

                        break;
                    case 'rangeslider' :

                        var el = $compile('<rangeslider question="' + key + '"></rangeslider>')($scope);

                        break;
                    case 'dragdrop' :

                        var el = $compile('<dragdrop question="' + key + '"></dragdrop>')($scope);

                        break;
                }
                $element.append(el);
            });
        }
    }

})();