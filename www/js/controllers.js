angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
})
.controller('BookingCtrl', function($scope) {})
.controller('FmenuCtrl', function($scope,Chats,FmenuList) {
        console.log("FmenuCtrl");
        $scope.chats = Chats.all();
        $scope.ftype = Chats.ftype;
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };

        $scope.changeType = function(typeName) {
            console.log("ok");

            $scope.chats = FmenuList.all();
            $scope.ftype = FmenuList.ftype;
            if(typeName == "zhaopai"){
                $scope.chats = Chats.all();
                $scope.ftype = Chats.ftype;

            }

        };


})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('FmenuDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.fmenu = Chats.get($stateParams.chatId);
});
