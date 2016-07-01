(function () {
    'use strict';

    angular
        .module('app')
        .directive('disableSwipe', function ($ionicGesture) {

            return {
                link: function (scope, element, attrs) {

                    var disableSwipeListener = function (event) {

                        event.stopPropagation();
                    };

                    $ionicGesture.on("swipe", disableSwipeListener, element);
                }
            };
        });
})();