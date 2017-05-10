"use strict";

app.controller("MainController", function (Storage, Asset, Item, Random, $scope, $state, $http) {

  function constructor() {
    $scope.state = $state;

    // Get items
    $http.get(Asset.items).then(function (data) {
      for (var i in data.data) {
        Storage.items.push(new Item(data.data[i]));
      }

      // Get randoms
      $http.get(Asset.randoms).then(function (data) {
        for (var i in data.data) {
          var randomItems = [];

          for (var n in data.data[i].items) {
            randomItems.push(Storage.items[data.data[i].items[n]]);
          }

          Storage.randoms.push(new Random({
            name: data.data[i].name,
            items: randomItems
          }));
        }
      });
    });
  }

  constructor();
});
