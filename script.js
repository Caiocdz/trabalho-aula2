function soma(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").textContent = "O resultado da soma é: " + resultado;
}

function menos(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").textContent = "O resultado da subtração é: " + resultado;
}

function mult(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").textContent = "O resultado da multiplicação é: " + resultado;
}

function div(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 / num2;
    document.getElementById("resultado").textContent = "O resultado da divisão é: " + resultado;
    }

    function areatriangulo(){
        const base = parseFloat(document.getElementById("num1").value);
        const altura = parseFloat(document.getElementById("num2").value);
        const resultado = (base * altura) / 2;
        document.getElementById("resultado").textContent = "A área do triângulo é: " + resultado;
    }
    function areatrapezio() {
        const baseMaior = parseFloat(document.getElementById("num1").value);
        const baseMenor = parseFloat(document.getElementById("num2").value);
        const altura = parseFloat(document.getElementById("num3").value);
    
        const resultado = ((baseMaior + baseMenor) * altura) / 2;
    
        document.getElementById("resultado").textContent = "A área do trapézio é: " + resultado;
    }
    function arealosango(){
        const diagonalMaior = parseFloat(document.getElementById("num1").value);
        const diagonalMenor = parseFloat(document.getElementById("num2").value);
    
        const resultado = (diagonalMaior * diagonalMenor) / 2;
    
        document.getElementById("resultado").textContent = "A área do losango é: " + resultado;
    }
    function areacirculo(){
        const raio = parseFloat(document.getElementById("num1").value);
    
        const resultado = Math.PI * Math.pow(raio, 2);
    
        document.getElementById("resultado").textContent = "A área do círculo é: " + resultado.toFixed(2);
    }

    function areasetorcircular(){
        const raio = parseFloat(document.getElementById("num1").value);
        const angulo = parseFloat(document.getElementById("num2").value);
    
        const resultado = (angulo / 360) * Math.PI * Math.pow(raio, 2);
    
        document.getElementById("resultado").textContent =
        "A área do setor circular é: " + resultado.toFixed(2);
    }
    function areacoroacircular(){
        const raioMaior = parseFloat(document.getElementById("num1").value);
        const raioMenor = parseFloat(document.getElementById("num2").value);
    
        const resultado = Math.PI * (Math.pow(raioMaior, 2) - Math.pow(raioMenor, 2));
    
        document.getElementById("resultado").textContent =
        "A área da coroa circular é: " + resultado.toFixed(2);
    }
    