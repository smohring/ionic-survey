(function () {
  'use strict';

  var app = angular.module('app', ['ionic','ionic.rating', 'ngDraggable']);


  //Load Config.JSON ==============================================
  fetchData().then(bootstrapApplication);

  function fetchData() {

    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');

    return $http.get('config.json').then(function (response) {
      app.constant('CFG', response.data);

    }, function (errorResponse) {
      console.log('Application initialisation failed');
    });
  }

  function bootstrapApplication() {

    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  }

  //================================================================

  app.run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }

      if(ionic.Platform.isWebView()){
        $rootScope.device = device;
      }else{

        var device = {
          'uuid' : null
        };

        $rootScope.device = device;
      }
    });
  })

    .config(function ($ionicConfigProvider) {

      // note that you can also chain configs
      //$ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
      //$ionicConfigProvider.views.maxCache(0);
      $ionicConfigProvider.views.forwardCache(false);
    })

    .config(function ($stateProvider, $urlRouterProvider) {


      $stateProvider

        .state('home', {
          url: "/",
          templateUrl: "templates/home.html"
        })

        .state('settings', {
          url: "/settings",
          templateUrl: "templates/settings.html",
          controller: 'SettingsController as vm'
        })

        .state('survey', {
          url: "/survey/{id}",
          //cache: false,
          templateUrl: "templates/survey.html",
          controller: 'SurveyController as vm'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');

    });
})();
