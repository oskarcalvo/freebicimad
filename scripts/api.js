function calcular_opcion(Total,Bicis) {

 var valor = (Bicis*100)/Total;

 if(valor < 30){
 	return 'orangeIcon';
  }else if(valor > 70){
	return 'redIcon';
  }else { 
	return 'greenIcon'; 
  }
}
