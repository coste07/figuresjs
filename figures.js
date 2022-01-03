// Codigo del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado: " + perimetroCuadrado(ladoCuadrado) + "cm"); 

function areaCuadrado(lado){
    return lado*lado;
}  
//console.log("El area del cuadrado: " + areaCuadrado + "cm^2" );
console.groupEnd();

// Codigo del triangulo

console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
} 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm"); 

function areaTriangulo(base, altura) {
 return (base*altura)/2;
} 
//console.log("El area del triangulo es: " + areaTriangulo + " cm^2" );

console.groupEnd();

// Codigo del circulo

console.group("Circulo")

function diametroCirculo(radio){
    return radio*2;
} 
//console.log("El diametro del circulo: " + diametroCirculo + "cm"); 

function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}  
//console.log("El perimetro del circulo: " + perimetroCirculo + "cm" );

function areaCirculo(radio){
  return (radio*radio) * Math.PI  
} 
//console.log("El area del circulo: " + areaCirculo + "cm^2" );

console.groupEnd();
