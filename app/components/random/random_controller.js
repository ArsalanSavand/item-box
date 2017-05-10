"use strict";

app.controller("RandomController", function (Storage, $scope) {

  function constructor() {

    $scope.randoms = Storage.randoms;
  }

  constructor();
});
