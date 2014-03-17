/**
 * Created by bova on 17.03.14.
 */
var palisadeFirewallApp = angular.module('palisadeFirewallApp', ['iptServices', 'ngResource']);
palisadeFirewallApp.controller('IPTRuleListCtrl', ['$resource', '$scope', 'IPTRule', function ($resource, $scope, IPTRule) {
//    $scope.ipt_rules = IPTRule.query(function(){});
    $scope.orderProp = 'id';
    var rulesCollection =  $resource("/api/ipt_rule/",{}, {
            'query': {method: 'GET', responseType: 'json', isArray: true
                , transformResponse: function(data, headersGetter) {return data.objects;}
            }
        });
    $scope.my_rules = rulesCollection.query();
    console.log($scope.my_rules);
    $scope.jopa = 'JOPA';
}]);
