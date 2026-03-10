function soma(){
const n1 = parseFloat(document.getElementById("soma1").value);
const n2 = parseFloat(document.getElementById("soma2").value);

document.getElementById("resultado").textContent =
"O resultado da soma é: " + (n1+n2);
}

function menos(){
const n1 = parseFloat(document.getElementById("sub1").value);
const n2 = parseFloat(document.getElementById("sub2").value);

document.getElementById("resultado").textContent =
"O resultado da subtração é: " + (n1-n2);
}

function mult(){
const n1 = parseFloat(document.getElementById("mult1").value);
const n2 = parseFloat(document.getElementById("mult2").value);

document.getElementById("resultado").textContent =
"O resultado da multiplicação é: " + (n1*n2);
}

function div(){
const n1 = parseFloat(document.getElementById("div1").value);
const n2 = parseFloat(document.getElementById("div2").value);

document.getElementById("resultado").textContent =
"O resultado da divisão é: " + (n1/n2);
}

function areatriangulo(){
const base = parseFloat(document.getElementById("triBase").value);
const altura = parseFloat(document.getElementById("triAltura").value);

document.getElementById("resultado").textContent =
"A área do triângulo é: " + ((base*altura)/2);
}

function areaquadrado(){
const lado = parseFloat(document.getElementById("ladoQuadrado").value);

document.getElementById("resultado").textContent =
"A área do quadrado é: " + (lado*lado);
}

function arearetangulo(){
const base = parseFloat(document.getElementById("retBase").value);
const altura = parseFloat(document.getElementById("retAltura").value);

document.getElementById("resultado").textContent =
"A área do retângulo é: " + (base*altura);
}

function areatrapezio(){
const b1 = parseFloat(document.getElementById("trapBase1").value);
const b2 = parseFloat(document.getElementById("trapBase2").value);
const h = parseFloat(document.getElementById("trapAltura").value);

document.getElementById("resultado").textContent =
"A área do trapézio é: " + (((b1+b2)*h)/2);
}

function arealosango(){
const d1 = parseFloat(document.getElementById("losDiag1").value);
const d2 = parseFloat(document.getElementById("losDiag2").value);

document.getElementById("resultado").textContent =
"A área do losango é: " + ((d1*d2)/2);
}

function areacirculo(){
const r = parseFloat(document.getElementById("raioCirculo").value);

document.getElementById("resultado").textContent =
"A área do círculo é: " + (Math.PI*r*r).toFixed(2);
}

function areaparalelogramo(){
const base = parseFloat(document.getElementById("parBase").value);
const altura = parseFloat(document.getElementById("parAltura").value);

document.getElementById("resultado").textContent =
"A área do paralelogramo é: " + (base*altura);
}

function areasetorcircular(){
const r = parseFloat(document.getElementById("setRaio").value);
const ang = parseFloat(document.getElementById("setAngulo").value);

document.getElementById("resultado").textContent =
"A área do setor circular é: " + ((ang/360)*Math.PI*r*r).toFixed(2);
}

function areacoroacircular(){
const R = parseFloat(document.getElementById("coroaMaior").value);
const r = parseFloat(document.getElementById("coroaMenor").value);

document.getElementById("resultado").textContent =
"A área da coroa circular é: " + (Math.PI*(R*R-r*r)).toFixed(2);
}

function areaelipse(){
const a = parseFloat(document.getElementById("elipseMaior").value);
const b = parseFloat(document.getElementById("elipseMenor").value);

document.getElementById("resultado").textContent =
"A área da elipse é: " + (Math.PI*a*b).toFixed(2);
}

function areapoligonoregular(){
const ap = parseFloat(document.getElementById("apotema").value);
const p = parseFloat(document.getElementById("perimetro").value);

document.getElementById("resultado").textContent =
"A área do polígono regular é: " + ((ap*p)/2);
}