// Codigo del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}  

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
} 

function areaTriangulo(base, altura) {
 return (base*altura)/2;
} 
console.groupEnd();

// Codigo del circulo

console.group("Circulo")

function diametroCirculo(radio){
    return radio*2;
} 

function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}  

function areaCirculo(radio){
  return (radio*radio) * Math.PI  
} 


console.groupEnd();


function calcularPerimetroCuadrado(){
    alert(perimetroCuadrado(document.getElementById("InputCuadrado").value));
}

function calcularAreaCuadrado(){
    alert(areaCuadrado(document.getElementById("InputCuadrado").value));
}