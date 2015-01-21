var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "posts controller yay";
}]);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http) {
  $scope.newName = "new posts controller";
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.postName ="this is the post view";
  $scope.id = $stateParams.id;
}]);

postsControllerModule.controller('editPostController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.postName ="this is the post view";
  $scope.id = $stateParams.id;
}]);
