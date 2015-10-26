/**
 * Created by DK on 10/19/2015.
 */
angular.module('factory', ['ngResource'])
	.factory('factoryTest', function($resource) {
		return {

			getData: $resource('json/test.json',{},{method:"get",isArray:true})
		};
	})