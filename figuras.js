//codigo del cuadrado 
console.group("Cuadrado");
function perimetrocuadrado(lado){
    return lado * 4;
}

function areacuadrado(lado){
    return lado * lado;
}

console.groupEnd();



//codigo del triangulo 
console.group("Triangulo");

function perimetrotriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areatriangulo(base, altura){
    return (base * altura)/2;
} 

console.groupEnd();


//Codigo del circulo 
console.group("Circulo");
 
function diametrocirculo(radio){
    return radio * 2;
}
const pi = Math.PI;

function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * pi
} 

function areacirculo (radio){
    return (radio * radio)* pi
}

console.groupEnd();



// aqui interactualos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areacuadrado(value);
    alert(area);
}