$(document).ready(() => {
// 
$(".new_burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // console.log("POST CALL",  $("#new_burger_text").val().trim());
      var newBurger = {
        burger_name: $("#new_burger_text").val().trim()
      };

//Send the post request:
        $.ajax("api/burgers", {
            method: 'POST',
            data: newBurger,
        }).then(()=>{
            console.log("Fresh Burger!")
    // Reload the page to get the updated list
            location.reload()
        }
        );
    });

//Setting up the onclick devour burger event
    $(".devoured").on("click", function (event) {
        var id = $(this).attr("id");
        var beenDevoured = $(this).data("beenDevoured");
        
        var newBurgerDevoured = { devoured: beenDevoured };
        
        //Use AJAX put method to update to devoured
        $.ajax("api/burgers" + id, {
            method: "PUT",
            data: newBurgerDevoured
        }).then(function () {
            console.log("You devoured that burger!");
            location.reload();
        });
    });


//Clearing the devoured burgers
    $(".delete_burger").on("click", function(event) {
        var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Yum");
          // Reload the page to get the updated list
          location.reload();
        }
    );
  })

})


      