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
    $scope.rule.ipranges = [];

    $scope.add_iprange = function(){
        var idx = $scope.rule.ipranges.length;
        $scope.rule.ipranges[idx] = {rule_id: idx, src_range: '', dst_range: ''};
    };
    $scope.add = function(rule) {
        $scope.rule.source = rule.source;
        $scope.rule.destination = rule.destination;
        $scope.rule.protocol = rule.protocol;
        $scope.rule.jump = rule.jump;
//        $scope.rule.ipranges = [];
//        $scope.rule.ipranges = [{rule_id: 2, src_range: '10.50.50.1', dst_range: '10.50.50.199'}];
//        $scope.rule.ipranges = rule.ipranges;
        $scope.rule.$save();
        $location.path('#/rules');
    }
}]);