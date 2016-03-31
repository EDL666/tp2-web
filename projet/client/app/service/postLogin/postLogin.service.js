'use strict';

angular.module('fs3App')
  .service('PostLogin', function ($resource) {
    var apiUrl = 'https://crispesh.herokuapp.com/api';
    $resource(apiUrl + '/login_check', {}, {
    	            login:{
    		            method:'POST',
    		            headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
    		            transformRequest: function (data, headersGetter) {
    		               var str = [];
    		               for (var d in data)
    		                   str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    		               return str.join("&");
    		            }
    	            },
    	        });
  });
