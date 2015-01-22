var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {
  $scope.name = "posts controller yay";
  $scope.posts = [];
  apiService.get('posts')
    .success(function(data){
      $scope.posts = data;
    });
}]);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http) {
  // $scope.newName = "new posts controller";

  $http.get('http://localhost:3000/post') //returns a promise object
    .success(function(data){
      $scope.post = data;
    });

  $scope.newPost = {"title": '', "content": '', "tag_ids": []};

  $scope.submitNewPost = function(){

    //
    //
    // // sending to the view
    // var postToPush = {};
    // postToPush.title = $scope.newPost.title;
    // postToPush.content = $scope.newPost.content;
    // postToPush.tag_ids = [];
    // for (i = 0; i < $scope.newPost.tag_ids.length; i++){
    //   tag = $scope.newPost.tag_ids[i];
    //   postToPush.tag_ids.push(tag);
    // }
    // $scope.post.push(postToPush);

    $http.post('http://localhost:3000/posts',
      {
        post: {
          title: $scope.newPost.title,
          content: $scope.newPost.content
        }
      }
    )
  }
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.postName ="this is the post view";
  $scope.id = $stateParams.id;
}]);

postsControllerModule.controller('editPostController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.postName ="this is the post view";
  $scope.id = $stateParams.id;
}]);

postsControllerModule.controller('showPostController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.postName ="this is the post view";
  $scope.id = $stateParams.id;
}]);
