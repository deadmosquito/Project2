
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
    ///////////////////SHIPPING CALCULATION////////////////////////////
    $(".calculate").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var city = $(".shipping-city").val().trim()
        var zip = $(".shipping-zip").val().trim()
        var shippingWeight = $(".shipping-weight").val().trim()
        var apiCode ='"985WEBAY5309"'
        var shippingAPI ="https://secure.shippingapis.com/shippingapi.dll?API=RateV4&XML=<RateV4Request USERID="+apiCode+">"
        shippingAPI+=" <Revision>2</Revision>"
        shippingAPI+="<Package ID='1ST'>"
        shippingAPI+="<Service>PRIORITY</Service>"
        shippingAPI+="<ZipOrigination>90005</ZipOrigination>"
        shippingAPI+="<ZipDestination>"+zip+"</ZipDestination>"
        shippingAPI+="<Pounds>"+shippingWeight+"</Pounds>"
        shippingAPI+="<Ounces>0</Ounces>"
        shippingAPI+="<Container></Container>"
        shippingAPI+="<Width></Width>"
        shippingAPI+="<Length></Length>"
        shippingAPI+="<Height></Height>"
        shippingAPI+="<Girth></Girth>"
        shippingAPI+="<Machinable>false</Machinable>"
        shippingAPI+="</Package>"
        shippingAPI+=" </RateV4Request> "
        //alert(shippingAPI)
        $.ajax(shippingAPI,{
            type:"GET"
        }).then(function(result){
            
            
            
            console.log(jQuery.parseJSON(result))

        })
    })
    ///////////////////////////////////////////////////////////////////
   /*  $(".add-to-cart").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/cart/" + id, {
            type: "GET"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        ).catch(function (err) {
            console.log('from jquery file')
            console.log(err)
        });
    }); */
});
