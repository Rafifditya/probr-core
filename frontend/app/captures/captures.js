'use strict';

angular.module('probrApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('captures', {
                url: '/captures',
                templateUrl: 'static/app/captures/captures.html',
                controller: 'CapturesCtrl'
            });
        ;
    });