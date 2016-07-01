(function () {
    'use strict';

    angular
        .module('app')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$rootScope'];

    function SettingsController($rootScope) {

        var vm = this;
        vm.uuid = angular.isUndefined($rootScope.device) ? 'UUID nicht vorhanden' : $rootScope.device.uuid;

    }
})();