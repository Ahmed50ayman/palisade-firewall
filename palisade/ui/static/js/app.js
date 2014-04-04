/**
 * Created by bova on 04.04.14.
 */
'use strict';

/* App Module */
var palisadeFirewallApp = angular.module('palisadeFirewallApp', [
    'iptServices',
    'ngResource',
    'ngRoute',
    'palisadeControllers'
]);

palisadeFirewallApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/rules', {
                templateUrl: 'static/partials/rule_list.html',
                controller: 'IPTRuleListCtrl'
            }).
            when('/rules/add', {
                templateUrl: 'static/partials/rule_add.html',
                controller: 'IPTRuleAddCtrl'
            }).otherwise({
                redirectTo: '/rules'
            });
    }]);


