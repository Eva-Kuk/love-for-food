let autocomplete;

function initAutoComplete() {
    autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('id_address'), {
                types: ['geocode', 'establishment'],
                //default in this app is "IN" - add your country code
                componentRestrictions: { 'country': ['ie'] },
            })
        // function to specify what should happen when the prediction is clicked
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();

    // User did not select the prediction. Reset the input field or alert()
    if (!place.geometry) {
        document.getElementById('id_address').placeholder = "Start typing...";
    } else {
        //  console.log('place name=>', place.name)
    }
    // get the address components and assign them to the fields
    // console.log(place);
    var geocoder = new google.maps.Geocoder()
    var address = document.getElementById('id_address').value

    geocoder.geocode({ 'address': address }, function(results, status) {
        //console.log('results=>', results)
        //console.log('status=>', status)
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();

            // console.log('lat=>', latitude);
            // console.log('long=>', longitude);
            // when chosen the address the lat and lng will be picked and assigned to their fields
            $('#id_latitude').val(latitude);
            $('#id_longitude').val(longitude);
        }
    });

    // loop through the address components and assign other address data
    console.log(place.address_components);
    for (var i = 0; i < place.address_components.length; i++) {
        for (var j = 0; j < place.address_components[i].types.length; j++) {
            // get country
            if (place.address_components[i].types[j] == 'country') {
                $('#id_country').val(place.address_components[i].long_name);
            }
            // get county
            if (place.address_components[i].types[j] == 'administrative_area_level_1') {
                $('#id_state').val(place.address_components[i].long_name);
            }
            // get city
            if (place.address_components[i].types[j] == 'locality') {
                $('#id_city').val(place.address_components[i].long_name);
            }
            // get Eircode postal code
            if (place.address_components[i].types[j] == 'postal_code') {
                $('#id_pin_code').val(place.address_components[i].long_name);
            } else {
                $('#id_pin_code').val("")
            }
        }
    }
}

$(document).ready(function() {
    // add to cart
    $('.add_to_cart').on('click', function(e) {
        e.preventDefault();

        food_id = $(this).attr('data-id');
        url = $(this).attr('data-url');

        $.ajax({
            type: 'GET',
            url: url,
            success: function(response) {
                console.log(response)
                if (response.status == 'login_required') {
                    swal(response.message, '', 'info').then(function() {
                        window.location = '/login';
                    })
                }
                if (response.status == 'Failed') {
                    swal(response.message, '', 'error')
                } else {
                    $('#cart_counter').html(response.cart_counter['cart_count']);
                    $('#qty-' + food_id).html(response.qty);

                    // subtotal, tax and grand total
                    applyCartAmounts(
                        response.cart_amount['subtotal'],
                        response.cart_amount['tax'],
                        response.cart_amount['grand_total']
                    )
                }
            }
        })
    })

    // place the cart item quantity on load
    $('.item_qty').each(function() {
        var the_id = $(this).attr('id')
        var qty = $(this).attr('data-qty')
        $('#' + the_id).html(qty)
    })

    // decrease cart
    $('.decrease_cart').on('click', function(e) {
        e.preventDefault();

        food_id = $(this).attr('data-id');
        url = $(this).attr('data-url');
        cart_id = $(this).attr('id');

        $.ajax({
            type: 'GET',
            url: url,
            success: function(response) {
                console.log(response)
                if (response.status == 'login_required') {
                    swal(response.message, '', 'info').then(function() {
                        window.location = '/login';
                    })
                } else if (response.status == 'Failed') {
                    swal(response.message, '', 'error')
                } else {
                    $('#cart_counter').html(response.cart_counter['cart_count']);
                    $('#qty-' + food_id).html(response.qty);

                    applyCartAmounts(
                        response.cart_amount['subtotal'],
                        response.cart_amount['tax'],
                        response.cart_amount['grand_total']
                    )

                    if (window.location.pathname == '/cart/') {
                        removeCartItem(response.qty, cart_id)
                        checkEmptyCart();
                    }
                }
            }
        })
    })

    // DELETE CART ITEM
    $('.delete_cart').on('click', function(e) {
        e.preventDefault();

        //alert('testing');
        //return false;

        cart_id = $(this).attr('data-id');
        url = $(this).attr('data-url');

        $.ajax({
            type: 'GET',
            url: url,
            success: function(response) {
                console.log(response)
                if (response.status == 'Failed') {
                    swal(response.message, '', 'error')
                } else {
                    $('#cart_counter').html(response.cart_counter['cart_count']);
                    swal(response.status, response.message, "success")

                    applyCartAmounts(
                        response.cart_amount['subtotal'],
                        response.cart_amount['tax'],
                        response.cart_amount['grand_total']
                    )

                    removeCartItem(0, cart_id);
                    checkEmptyCart();
                }
            }
        })
    })

    // delete the cart element if the quantity is 0
    function removeCartItem(cartItemQty, cart_id) {
        if (cartItemQty <= 0) {
            // remove the cart item element
            document.getElementById("cart_item-" + cart_id).remove()
        }
    }

    // Check if the cart is empty
    function checkEmptyCart() {
        var cart_counter = document.getElementById('cart_counter').innerHTML
        if (cart_counter == 0) {
            document.getElementById("empty-cart").style.display = "block";
        }
    }

    // apply cart amounts
    function applyCartAmounts(subtotal, tax, grand_total) {
        if (window.location.pathname == '/cart/') {
            $('#subtotal').html(subtotal)
            $('#tax').html(tax)
            $('#total').html(grand_total)
        }
    }


    $('.add_hour').on('click', function(e) {
            e.preventDefault();
            //alert('test');
            var day = document.getElementById('id_day').value
            var from_hour = document.getElementById('id_from_hour').value
            var to_hour = document.getElementById('id_to_hour').value
            var is_closed = document.getElementById('id_is_closed').checked
            var csrf_token = $('input[name=csrfmiddlewaretoken]').val()

            console.log(day, from_hour, to_hour, is_closed, csrf_token)
        })
        // document ready close
});