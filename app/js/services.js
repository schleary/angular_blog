var servicesModule = angular.module('servicesModule', []);

servicesModule.factory('apiService', ['$http', function($http){
  var url = 'http://localhost:3000/';

  // $http.post('http://localhost:3000/posts',
  //   {
  //     post: {
  //       title: $scope.newPost.title,
  //       content: $scope.newPost.content
  //     }
  //   }
  // )


  return{
    get: function(page){
      return $http.get(url + page)
    },
    postPost:function(newPost){
      $http.post(url + 'posts',
        {
          post: {
            title: newPost.title,
            content: newPost.content
          }
        }
      )
    }
    //the above substitutes the two below
    // getPosts: function(){
    //   return $http.get('http://localhost/3000/posts');
    // },
    // getTags: function(){
    //   return $http.get('http://localhost/3000/tags');
    // }
  }
}]);
