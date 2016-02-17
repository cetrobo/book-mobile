angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Auteurs,$log) {


$scope.log=$log;
$scope.auteurs=Auteurs.all();
//console.log(Auteurs.all());
// pour afficher les propriété d'un object on affecte l'object à scope

})

.controller('AuteurDetailCtrl', function($scope, $stateParams, Auteurs) {
  //$scope.chat = Chats.get($stateParams.chatId);
  
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //$scope.chats = Chats.all();
  //console.log($scope.chats);
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
