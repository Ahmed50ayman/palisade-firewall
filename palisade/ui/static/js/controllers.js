/**
 * Created by bova on 17.03.14.
 */
var palisadeFirewallApp = angular.module('palisadeFirewallApp', ['iptServices', 'ngResource', 'ui.bootstrap']);
palisadeFirewallApp.controller('IPTRuleListCtrl', ['$resource', '$scope', 'IPTRule', function ($resource, $scope, IPTRule) {
//    $scope.ipt_rules = IPTRule.query(function(){});
    $scope.orderProp = 'id';

    $scope.page_number = 1;

    $scope.showTable = function(page) {
        $scope.my_rules = IPTRule.query({page: page});
    }
    $scope.delete_rule = function(rule_id) {
        IPTRule.delete({id: rule_id});
        $scope.showTable($scope.page_number);
    }
    $scope.my_rules = IPTRule.query({page: 2});
    var rule = new IPTRule();
    rule.protocol = 'tcp';
    rule.source = '10.50.50.1';
    rule.destination = '10.50.50.254';
    rule.jump = 'DROP';
    rule.$save();
    $scope.rule2 = IPTRule.get({id: 26});
}]);

palisadeFirewallApp.controller('AddUserCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.open = function() {
        var modalIntance = $modal.open({
            templateUrl: 'AddUserContent.html'
        });
    }
}]);
