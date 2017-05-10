"use strict";

app.provider("Storage", function () {
  this.$get = function () {
    return {
      items: [],
      randoms: []
    };
  };
});
