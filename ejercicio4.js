
function codigo(){
    var texto = document.getElementById("enlace").value;
    var indice = texto.indexOf("c")+4;

    var respuesta = texto.substring(indice,indice+15);
    
    var respuestaFinal = respuesta.substring(0,3)+ respuesta.substring(4,8)+ respuesta.substring(9,12);
    
    alert("el codigo es: " + respuestaFinal);


}