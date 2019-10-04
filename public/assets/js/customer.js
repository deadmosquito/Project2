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
    ///////////////////SHIPPING CALCULATION////////////////////////////
    $(".calculate").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var city = $(".shipping-city").val().trim()
        var zip = $(".shipping-zip").val().trim()
        var shippingWeight = $(".shipping-weight").val().trim()
        var apiCode = '"985WEBAY5309"'
        var shippingAPI = "https://secure.shippingapis.com/shippingapi.dll?API=RateV4&XML=<RateV4Request USERID=" + apiCode + ">"
        shippingAPI += " <Revision>2</Revision>"
        shippingAPI += "<Package ID='1ST'>"
        shippingAPI += "<Service>PRIORITY</Service>"
        shippingAPI += "<ZipOrigination>90005</ZipOrigination>"
        shippingAPI += "<ZipDestination>" + zip + "</ZipDestination>"
        shippingAPI += "<Pounds>" + shippingWeight + "</Pounds>"
        shippingAPI += "<Ounces>0</Ounces>"
        shippingAPI += "<Container></Container>"
        shippingAPI += "<Width></Width>"
        shippingAPI += "<Length></Length>"
        shippingAPI += "<Height></Height>"
        shippingAPI += "<Girth></Girth>"
        shippingAPI += "<Machinable>false</Machinable>"
        shippingAPI += "</Package>"
        shippingAPI += " </RateV4Request> "
        //alert(shippingAPI)
        $.ajax(shippingAPI, {
            type: "GET"
        }).then(function (resultXLM) {
            //var xmlToString = new XMLSerializer().serializeToString(resultXLM);
           // var xmlStringToJason = JSON.stringify(xmlToString,2)
            var jsonText = JSON.stringify(xmlToJson(resultXLM));
            var jsonTextToStringiFy = JSON.parse(jsonText)
            console.log(jsonTextToStringiFy.RateV4Response.Package.Postage.Rate['#text'])
            

            function xmlToJson(xml) {
	
                // Create the return object
                var obj = {};
            
                if (xml.nodeType == 1) { // element
                    // do attributes
                    if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                        for (var j = 0; j < xml.attributes.length; j++) {
                            var attribute = xml.attributes.item(j);
                            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                        }
                    }
                } else if (xml.nodeType == 3) { // text
                    obj = xml.nodeValue;
                }
            
                // do children
                if (xml.hasChildNodes()) {
                    for(var i = 0; i < xml.childNodes.length; i++) {
                        var item = xml.childNodes.item(i);
                        var nodeName = item.nodeName;
                        if (typeof(obj[nodeName]) == "undefined") {
                            obj[nodeName] = xmlToJson(item);
                        } else {
                            if (typeof(obj[nodeName].push) == "undefined") {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }
                            obj[nodeName].push(xmlToJson(item));
                        }
                    }
                }
                return obj;
            };







            //var xmlToString = resultXLM.toString()
           // console.log(xmlToString)
            $.ajax("/api/shipping", {
                type: "POST",
                data: jsonTextToStringiFy
            }).then(function () {
                console.log('sent')
            }).catch(function (err) {
                console.log(err)
            });
        }).catch(function (err) {
            console.log(err)
        });
        /* function sendShipping(x){
            $.ajax("/api/shipping", {
                type: "GET",
                data: x
            }).then(function () {
                console.log("shipping sent")
            }).catch(function (err) {
                //console.log('here')
                console.log(err)
            })
        } */

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

