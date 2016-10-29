var input = document.getElementById('inputId');
  google.maps.event.addDomListener(input, 'keydown', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
  });


// This Autocomplete 'module' is intended to be used for demonstration purposes on the landing page
// and also prototype outputting the geocoded JSON into the application for wider application.

$locationInfo = {
  geocode: null,
  streetNumber: null,
  street: null,
  city: null,
  state: null,
  country: null,
  postalCode: null,
  reset: function () {
    this.geocode = null;
    this.streetNumber = null;
    this.street = null;
    this.city = null;
    this.state = null;
    this.country = null;
    this.postalCode = null;
  }
};

googleAutocomplete = {
  autocompleteField: function (fieldId) {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById(fieldId)), { types: ['geocode'] };
    google.maps.event.addListener(autocomplete, 'place_changed', function() {

      // Segment results into usable parts
      var place = autocomplete.getPlace(),
          address = place.address_components,
          latLng = place.geometry.location.lat() + ' ' + place.geometry.location.lng();

      // Reset location object
      $locationInfo.reset();

      // Save address components (US only)
      $locationInfo.geocode = latLng;
      for(var i=0; i<address.length; i++) {
        var component = address[i].types[0];
        switch (component) {
          case 'street_number':
            $locationInfo.streetNumber = address[i]['long_name'];
            break;
          case 'route':
            $locationInfo.street = address[i]['long_name'];
            break;
          case 'locality':
            $locationInfo.city = address[i]['long_name'];
            break;
          case 'administrative_area_level_1':
            $locationInfo.state = address[i]['long_name'];
            break;
          case 'country':
            $locationInfo.country = address[i]['long_name'];
            break;
          case 'postal_code':
            $locationInfo.postalCode = address[i]['long_name'];
            break;
          default:
            break;
        }
      }

      // Example output
      $('#output').html(JSON.stringify($locationInfo, null, 4));

    });
  }
};

// Attach listener to field
googleAutocomplete.autocompleteField('autoField');

//Bias the autocomplete object to the account's geographical location,
//as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
                geolocation));
        });
    }
}
