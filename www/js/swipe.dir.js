(function () {
    'use strict';

    angular
        .module('app')
        .directive('swipe', swipe);

    swipe.$inject = ['$ionicGesture'];

    function swipe($ionicGesture) {

        var directive = {
            restrict: 'A',
            link: function ($scope, $element, $attr) {

                var handleSwipe = function (e) {

                    if (e.gesture.direction == "left") {
                        $scope.$emit('goto', 'next');
                    }

                    if (e.gesture.direction == "right") {
                        $scope.$emit('goto', 'prev');
                    }

                };

                var swipeGesture = $ionicGesture.on('swipe', handleSwipe, $element);

                $scope.$on('$destroy', function () {
                    $ionicGesture.off(swipeGesture, 'swipe', handleSwipe);
                });
            }
        };
        return directive;

    }
})();