"use strict";

app.service("Item", function () {
  return function (data) {

    var self = this;

    this.name = data.name;

    this.image = data.image;

    this.amount = data.amount;

    this.level = data.level;

    this.detail = data.detail;

    function constructor() {
      if (!self.amount) {
        self.amount = 1;
      }
      if (!self.level) {
        self.level = 1;
      }
      if (!self.detail) {
        self.detail = "Get " + self.amount + "x " + self.name;
      }
    }

    constructor();
  };
});
