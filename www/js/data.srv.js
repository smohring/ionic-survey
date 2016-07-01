(function () {
    'use strict';

    angular
        .module('app')
        .factory('data', data);

    data.$inject = ['$localstorage'];

    /* recommended */
    function data($localstorage) {

        var someValue = '';

        var service = {
            save: save,
            validate: validate
        };
        return service;


        function save() {

        };

        function validate() {

        };
    }
})();