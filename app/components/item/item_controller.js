"use strict";

app.controller("ItemController", function (Storage, $scope) {

  function constructor() {

    $scope.items = Storage.items;
  }

  constructor();
});
