angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '蒸酿小番茄',
    lastText: '价格：36',
    face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443958881146.jpg'
  }, {
    id: 1,
    name: '辣炒花甲',
    lastText: '价格：55',
    face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443945756708.jpg'
  }, {
    id: 2,
    name: '日式墨碎白鳕',
    lastText: '价格：98',
    face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443938265234.jpg'
  }, {
    id: 3,
    name: '金沙玉米',
    lastText: '价格：33',
    face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838296638.jpg'
  }, {
    id: 4,
    name: '花蛤蒸蛋',
    lastText: '32',
    face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838206503.jpg'
  },{
      id: 5,
      name: '蒸酿小番茄',
      lastText: '价格：36',
      face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443958881146.jpg'
  }, {
      id: 6,
      name: '辣炒花甲',
      lastText: '价格：55',
      face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443945756708.jpg'
  }, {
      id: 7,
      name: '日式墨碎白鳕',
      lastText: '价格：98',
      face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443938265234.jpg'
  }, {
      id: 8,
      name: '金沙玉米',
      lastText: '价格：33',
      face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838296638.jpg'
  }, {
      id: 9,
      name: '花蛤蒸蛋',
      lastText: '32',
      face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838206503.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    ftype:"zhaopai"
  };
})
.factory("FmenuList",function() {
    var fmenuList = [{
        id: 0,
        name: '蒸酿小番茄2222222',
        lastText: '价格：36',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443958881146.jpg'
    }, {
        id: 1,
        name: '辣炒花甲2222222',
        lastText: '价格：55',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443945756708.jpg'
    }, {
        id: 2,
        name: '日式墨碎白鳕22222',
        lastText: '价格：98',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443938265234.jpg'
    }, {
        id: 3,
        name: '金沙玉米2222222',
        lastText: '价格：33',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838296638.jpg'
    }, {
        id: 4,
        name: '花蛤蒸蛋2223',
        lastText: '32',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838206503.jpg'
    },{
        id: 5,
        name: '蒸酿小番茄4',
        lastText: '价格：36',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443958881146.jpg'
    }, {
        id: 6,
        name: '辣炒花甲2',
        lastText: '价格：55',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443945756708.jpg'
    }, {
        id: 7,
        name: '日式墨碎白鳕2',
        lastText: '价格：98',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/04/p120_201510041443938265234.jpg'
    }, {
        id: 8,
        name: '金沙玉米2',
        lastText: '价格：33',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838296638.jpg'
    }, {
        id: 9,
        name: '花蛤蒸蛋2',
        lastText: '32',
        face: 'http://i3.meishichina.com/attachment/recipe/2015/10/03/p120_201510031443838206503.jpg'
    }];

    return {
        all: function() {
            return fmenuList;
        },
        get: function(fmenuId) {
            for (var i = 0; i < fmenuList.length; i++) {
                if (fmenuList[i].id === parseInt(fmenuId)) {
                    return fmenuList[i];
                }
            }
            return null;
        },
        ftype:"paihang"
    };
})
.factory('orderOperation',['localStorageService',function(localStorageService) {
    var keyName = 'fOrder';
    return {
        get: function() {
            var all = localStorageService.get(keyName);
            return all;
        },
        set: function(item) {
            var all = localStorageService.get(keyName) || {};

        }
    }
}]);
