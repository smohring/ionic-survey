(function () {
    'use strict';

    angular
        .module('app')
        .controller('SurveyController', SurveyController);

    SurveyController.$inject = ['$state', '$scope', '$stateParams', '$ionicHistory', 'CFG'];

    function SurveyController($state, $scope, $stateParams, $ionicHistory, CFG) {

        var vm = this;
        vm.title = CFG.survey[$stateParams.id].title;

        vm.goto = goto;
        vm.isFinished = false;

        $scope.$watch(function () {
            isFinished();
        }, false);

        $scope.$on('goto', function (event, dir) {
            $scope.$apply(goto(dir));
        });

        //Logic to evaluate if all Questions are answered
        function isFinished() {

            var valid = 0;

            angular.forEach(CFG.survey[$stateParams.id].questions, function (key, value) {

                if (angular.isUndefined(key.required) || key.required == null || !key.required) {

                    valid++;
                    return true;
                }

                switch (key.type) {

                    case 'checkbox' :

                        var count = 0;
                        angular.forEach(key.options, function (key, value) {

                            if (key.checked) count++;

                        });

                        if (eval(count + key.required)) valid++;
                        break;

                    case 'radio' :

                        if (angular.isDefined(key.selected) && key.selected != null) valid++;
                        break;

                    case 'textarea' :

                        if (key.message != null && eval(key.message.length + key.required)) valid++;
                        break;
                }

            });

            return vm.isFinished = valid == CFG.survey[$stateParams.id].questions.length;
        }


        function goto(dir) {

            var nextSlideId = parseInt($stateParams.id) + 1;

            if (dir == 'next' || typeof dir === 'undefined') {

                if (nextSlideId < CFG.survey.length) {

                    if (isFinished()) {
                        $state.go('survey', {id: nextSlideId});
                    }

                } else {


                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    });

                    $state.go('home');
                }
            } else {

                $ionicHistory.goBack(-1);
            }
        }
    }
})();