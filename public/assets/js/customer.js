// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".change-item").on("click", function (event) {
        var id = $(this).data("id");


        var newCustomer = {
            fname: $("#fname").val().trim(),
            lname: $("#lname").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            zip: $("#zip").val().trim(),
            country: $("#country").val().trim(),
            city: $("#city").val().trim(),
            password: $("#password").val().trim(),
        };

        // Send the PUT request.
        $.ajax("/api/customers/" + id, {
            type: "PUT",
            data: newCustomer
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#create-form").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newCustomer = {
            fname: $("#fname").val().trim(),
            lname: $("#lname").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            zip: $("#zip").val().trim(),
            country: $("#country").val().trim(),
            city: $("#city").val().trim(),
            userpassword: $("#password").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/customers", {
            type: "POST",
            data: newCustomer
        }).then(
            function () {
                console.log("created new customer");
                // Reload the page to get the updated list
                location.reload();
            }
        ).catch(function (err) {
            console.log(err)
        })
    });

    $(".login").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var credentials = {
          email: $("#email").val().trim(),
           userpassword: $("#password").val().trim(),
        };
       
        // Send the POST request.
        $.ajax("/api/customers/login", {
            type: "POST",
            data: credentials
        }
        ).catch(function (err) {
            console.log(err)
        })
    });


    $(".delete-customer").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/customers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted customer", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".add-to-cart").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/cart/" + id, {
            type: "POST"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
