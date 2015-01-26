var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {
  $scope.name = "posts controller yay";
  $scope.posts = [];

  // new
  $scope.tags = [];

  apiService.get('posts')
    .success(function(data){
      $scope.posts = data;
    });

  apiService.get('tags')
    .success(function(data){
      $scope.tags = data;
    });

  $scope.getTagName = function(id) {
    var ret = "";
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.tags.length; i++){
      // checks to see if the param we passed is equal to the tag id
      if(id == $scope.tags[i].id) {
        ret = $scope.tags[i].name
      }
    }
    return ret;
  }

  $scope.toggleId = function(id) {
    var i = $scope.newPost.tag_ids.indexOf(id);
    // i will equal either the index of the
    // item if it's in the array, or -1 if not

    if(i == -1) {
      $scope.newPost.tag_ids.push(id);
    } else {
      $scope.newPost.tag_ids.splice(i, 1);
    }
  }

  $scope.tagArray = [];


  // Not added in class; added in discussion with students, and from lecture notes
  $scope.addTag = function(id) {
    var i = $scope.tagArray.indexOf(id);
    // i will equal either the index of the
    // item if it's in the array, or -1 if not

    if(i == -1) {
      $scope.tagArray.push(id);
    } else {
      $scope.tagArray.splice(i, 1);
    }
  }
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

  apiService.get('posts')
    .success(function(data){

      for(var i = 0; i < data.length; i++){

        if (data[i].id == $stateParams.id){
          $scope.post = data[i];
        }
      };
      $scope.postName = $scope.post.title;
      $scope.id = $stateParams.id;
    });

    apiService.get('tags')
      .success(function(data){
        $scope.tags = data;
      });

    $scope.getTagName = function(id) {
      var ret = "";
      // loops through all of the tags in $scope.tags
      for (i = 0; i < $scope.tags.length; i++){
        // checks to see if the param we passed is equal to the tag id
        if(id == $scope.tags[i].id) {
          ret = $scope.tags[i].name
        }
      }
      return ret;
    }

}]);

postsControllerModule.controller('showPostController', ['$scope', '$http', '$stateParams', 'apiService', function($scope, $http, $stateParams, apiService){

  apiService.get('posts')
    .success(function(data){

      for(var i = 0; i < data.length; i++){

        if (data[i].id == $stateParams.id){
          $scope.post = data[i];
        }
      };
      $scope.postName = $scope.post.title;
      $scope.id = $stateParams.id;
    });

    apiService.get('tags')
      .success(function(data){
        $scope.tags = data;
      });

    $scope.getTagName = function(id) {
      var ret = "";
      // loops through all of the tags in $scope.tags
      for (i = 0; i < $scope.tags.length; i++){
        // checks to see if the param we passed is equal to the tag id
        if(id == $scope.tags[i].id) {
          ret = $scope.tags[i].name
        }
      }
      return ret;
    }

}]);
