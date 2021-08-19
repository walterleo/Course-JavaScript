// console.log("Hello Wallace");

// Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "" + "cm");

//const perimetro = ladoCuadrado * 4;

// Estamos aplicando ahora funciones para que nos retornen un resultado y el usuario pueda asignar cualquier valor
function perimetroCuadrado(lado){
    return lado * 4;
}

perimetroCuadrado();

//console.log("El perimetro del cuadrado es: " + perimetro + "" + "cm");


//const area = ladoCuadrado * ladoCuadrado;

//console.log("El area del cuadrado es: " + area + "" + "cm^2");

// Estamos aplicando ahora funciones para que nos retornen un resultado y el usuario pueda asignar cualquier valor
function areaCuadrado(lado){
    return lado * lado;
}

areaCuadrado();

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");
// const ladoUno = 6;
// const ladoDos = 6;
// const base = 4;

// console.log("Los lados del triangulo miden: " + ladoUno + "cm," + ladoDos+ "cm,"+ base+ "cm")

const perimetroT = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;

//console.log("El perimetro del triangulo es: " + perimetroT + "" + "cm");

// const alturaTriangulo = 5.5;

// console.log("La altura del triangulo es: " + alturaTriangulo + "cm")


const areaTriangulo = (base, alturaTriangulo) => (base * alturaTriangulo)/2;

// console.log("El area del tri es: " + areaTriangulo + "" + "cm^2");

console.groupEnd();

// Area de un circulo

console.group("Circle");
// const ratioC = 4;
// const diametroC = ratioC*2;
//const PI = 3.1415;

const PI = Math.PI;

function diametroCirculo(ratio){
    return ratio * 2;
}

// console.log("El radio del circulo mide: " + ratioC + "cm")

// const perimetroCirculo = diametroC * PI;

function perimetroCirculo (ratio) {

    const diametro = diametroCirculo(ratio);
    return diametro * PI;
}

//console.log("El perimetro del circle es: " + perimetroCirculo + "" + "cm");



//console.log("El valor del PI es: " + PI);

const areaCir =(ratio, PI)=> (ratio * ratio) * PI;

//console.log("El area del circulo es: " + areaCir + "cm^2");



console.groupEnd();


