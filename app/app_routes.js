"use strict";

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("app", {
    abstract: true,
    template: "<ui-view/>"
  })

  .state("app.home", {
    url: "/",
    controller: "HomeController",
    templateUrl: "components/home/home.html"
  })

  .state("app.item", {
    url: "/item",
    controller: "ItemController",
    templateUrl: "components/item/item.html"
  })

  .state("app.random", {
    url: "/random",
    controller: "RandomController",
    templateUrl: "components/random/random.html"
  });

  $urlRouterProvider.otherwise("/");
});
