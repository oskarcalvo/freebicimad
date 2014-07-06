var Estaciones = {
  

  init: function(){

    $.getJSON('http://bicimad-api.herokuapp.com/',  function(data){
      $(Estaciones).trigger("estaciones_ready")
    });
  },

  getEstaciones: function(){

      return this.estaciones;
  }


}