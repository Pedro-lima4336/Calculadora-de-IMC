function calcular() {
var peso;
var altura;
var resultado;



peso = parseFloat(document.getElementById('peso').value);



altura = parseFloat(document.getElementById('altura').value);



resultado = peso / (altura * altura);



alert(resultado);



if (resultado <18.5) {
document.getElementById('divimg').src ="IMG/magro.png";
}
else if (resultado >18.5 && resultado > 25) {
document.getElementById('divimg').src ="IMG/normal.png";
}
else {
document.getElementById('divimg').src ="IMG/gordo.png";
}
}