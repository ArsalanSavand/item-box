"use strict";

app.service("Random", function (Item) {
  return function (data) {

    this.name = data.name;

    this.items = data.items;

    this.item = new Item({
      name: this.name,
      image: "assets/images/random.png",
      level: "?",
      detail: "Random of " + this.items.length + " cards"
    });

    this.show = function () {
      this.item = this.items[
        Math.round(Math.random() * (this.items.length - 1))
      ];
    };
  };
});
