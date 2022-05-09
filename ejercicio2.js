function invertir(){
    var palabra = document.getElementById("palabra").value;
    var palabrainvertido = palabra.split('').reverse().join('');
    alert("la palabra invertida es: "+palabrainvertido);
 }