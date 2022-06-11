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


//calcular la altura del trinagulo isoceles
function isocelesaltura(lado1, lado2, lado3){
    if (lado1 === lado2){
        return Math.sqrt(lado1^2 - ((lado3^2)/4));
        
    }else if(lado1 === lado3){
        return Math.sqrt(lado1^2 - ((lado2^2)/4));
       
    }else if(lado2 === lado3){
        return Math.sqrt(lado2^2 - ((lado1^2)/4));
        
    }else{
        return false;
    }
}




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



function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulolado1");
    const value1 = parseInt(input1.value); 
    const input2 = document.getElementById("inputTriangulolado2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTriangulobase");
    const value3 = parseInt(input3.value);

    const perimetro = perimetrotriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input2 = document.getElementById("inputTrianguloaltura");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTriangulobase");
    const value3 = parseInt(input3.value);

    const area = areatriangulo(value2, value3);
    alert(area);   
}
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTriangulol1");
    const value1 = parseInt(input1.value); 
    const input2 = document.getElementById("inputTriangulol2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTriangulol3");
    const value3 = parseInt(input3.value);

    const altura = isocelesaltura(value1, value2, value3);
    if(altura  > 0){
        alert(altura);
    }else{
        alert("Deben ser dos de sus lados iguales")
    }


   
    
}



function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametrocirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetrocirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areacirculo(value);
    alert(area);
}