var servicesModule = angular.module('servicesModule', []);

servicesModule.factory('apiService', ['$http', function($http){
  var url = 'http://localhost:3000/';

  return{
    get: function(page){
      return $http.get(url + page)
    },
    // getPosts: function(){
    //   return $http.get('http://localhost/3000/posts');
    // },
    // getTags: function(){
    //   return $http.get('http://localhost/3000/tags');
    // }
  }
}]);
