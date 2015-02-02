var DashCtrl = function($scope) {

}

var ChatsCtrl =  function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
}

var ChatDetailCtrl = function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}

var FriendsCtrl = function($scope, Friends) {
  $scope.friends = Friends.all();
}

var FriendDetailCtrl =  function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
}

var AccountCtrl =  function($scope) {
  $scope.settings = {
    enableFriends: true
  }
}

starter.Controllers.controller('DashCtrl', ['$scope', DashCtrl]);
starter.Controllers.controller('ChatsCtrl', ['$scope', 'Chats', ChatsCtrl]);
starter.Controllers.controller('ChatDetailCtrl', ['$scope', '$stateParams','Chats', ChatDetailCtrl]);
starter.Controllers.controller('FriendsCtrl', ['$scope', 'Friends', FriendsCtrl]);
starter.Controllers.controller('FriendDetailCtrl', ['$scope', '$stateParams','Friends', FriendDetailCtrl]);
starter.Controllers.controller('AccountCtrl', ['$scope', AccountCtrl]);
