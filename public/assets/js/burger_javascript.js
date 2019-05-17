    
$(function() {
    //when click devour me button creates key and value to be changed in database
  $(".devourBtn").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    var eaten = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });

  //when click submit button form value is grabbed and new key/value is created and sent to database
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      // devoured:0
    };

    // console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
    //   console.log("added a new burger");
      location.reload();
    });
  });
});