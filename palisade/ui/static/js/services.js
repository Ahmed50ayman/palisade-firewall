/**
 * Created by bova on 17.03.14.
 */
var iptServices = angular.module('iptServices', ['ngResource']);

iptServices.factory('IPTRule', ['$resource',
    function($resource){
        return $resource('api/ipt_rule/', {}, {
            query: {method: 'GET', params:{id: 'id'}, isArray:false}
        });
    }]);