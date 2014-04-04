/**
 * Created by bova on 17.03.14.
 */
/* Controllers */


var palisadeControllers = angular.module('palisadeControllers', []);

palisadeControllers.controller('IPTRuleListCtrl', ['$resource', '$scope', 'IPTRule', function ($resource, $scope, IPTRule) {
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

//    $scope.rule2 = IPTRule.get({id: 26});
}]);

palisadeControllers.controller('IPTRuleAddCtrl', ['$resource', '$scope', '$location', 'IPTRule', function ($resource, $scope, $location, IPTRule) {
    $scope.rule = new IPTRule();
    $scope.rule.protocol = 'tcp';
    $scope.rule.jump = 'DROP';

    $scope.add = function(rule) {
        $scope.rule.source = rule.source;
        $scope.rule.destination = rule.destination;
        $scope.rule.protocol = rule.protocol;
        $scope.rule.jump = rule.jump;
        $scope.rule.$save();
        $location.path('#/rules');
    }
}]);