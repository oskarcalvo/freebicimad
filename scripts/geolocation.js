var Geo = {
  populateHeader: function(lat, lng){
    $('#Lat').html(lat);
    $('#Long').html(lng);
  },
  init: function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  },
  getLat: function(){
    return this.lat;
  },
  getLng: function(){
    return this.lng;
  },
  success: function(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
      Geo.populateHeader(Geo.lat, Geo.lng);
      $(Geo).trigger("geolocation_ready")
      //L.marker([Geo.lat, Geo.lng]).addTo(map).bindPopup("You are here").openPopup();
    },
  error: function(){
      console.log("Geocoder failed");
    },
  isMadrid: function(){

  return $.ajax({ url:'http://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.lng+'&sensor=true',
                success: function(data){

               }
             });    
  },
  valueOf: function(){
    return {
      lat: this.lat,
      lng: this.lng
    }
  }
}