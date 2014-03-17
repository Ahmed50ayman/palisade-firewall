/**
 * Created by bova on 17.03.14.
 */
var palisadeFirewallApp = angular.module('palisadeFirewallApp', ['ngRoute', 'iptServices']);
palisadeFirewallApp.controller('IPTRuleListCtrl', ['$scope', 'IPTRule', function ($scope, IPTRule) {
    $scope.ipt_rules = IPTRule.query();
    $scope.orderProp = 'id';
}]);
