"use strict";

app.run(function ($state, $window) {

  /**
   * @event body.keyup
   */
  angular.element("body").bind("keyup", function (event) {
    // If press escape or backspace
    if (event.which === 27 || event.which === 8) {
      // Go back if not at home
      if (!$state.includes("app.home")) {
        $window.history.back();
      }
    }
    // Press R refresh the page
    if (event.which === 82) {
      $state.go($state.current.name, {}, { reload: true });
    }
  });
});
