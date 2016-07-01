(function () {
  'use strict';

  angular
    .module('app')
    .directive('checkbox', checkbox);

  checkbox.$inject = ['$stateParams', 'CFG'];

  function checkbox($stateParams, CFG) {

    var directive = {
      restrict : 'E',
      templateUrl : 'templates/directives/checkbox.directive.html',
      scope : {},
      link : link
    };
    return directive;


    function link($scope, $element, $attr){

      $scope.data = CFG.survey[$stateParams.id].questions[$attr['question']];
    }
  }

})();