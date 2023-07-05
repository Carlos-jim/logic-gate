// Compuertas logicas
function AND(a, b) {
    resultado = a && b
    console.log(resultado)
}
    
function OR(a, b) {
    let result = ""
    // En cada iteración del bucle, se utiliza el operador OR (|) 
    //para comparar el elemento actual de la primera secuencia (a[i]) 
    //con el elemento correspondiente de la segunda secuencia (b[i]).
    for (let i = 0; i < a.length; i++) {
        result += a[i] | b[i]
    }
    console.log(result)
}
    
function NOT(a) {
    //Si el elemento en el índice i del arreglo a es igual a "0", entonces se agrega "1" 
    //a la variable resultado. De lo contrario, se agrega "0" a la variable resultado.
    let resultado = ""

    for (let i = 0; i < a.length; i++) {
        resultado += a[i] === "0" ? "1" : "0"
        
    }
    console.log( resultado)
}
    
function XOR(a, b) {
    let result = []

    for (let i = 0; i < a.length; i++) {
        result.push(a[i] ^ b[i])
        
    }
    let resultado = result.join("")

    console.log(resultado)
}


//guardamos las variables
function guardar() {

    let multiplexor1 = document.getElementById("input_multi1").value
    let multiplexor2 = document.getElementById("input_multi2").value
    let binario1 = document.getElementById("input_bina1").value
    let binario2 = document.getElementById("input_bina2").value
    console.log(binario1)
    console.log(binario2)
    console.log(multiplexor1)
    console.log(multiplexor2)

    multiplexor(multiplexor1, multiplexor2, binario1, binario2)
}


//Multiplexor
function multiplexor(multiplexor1, multiplexor2, binario1, binario2){
    //Compuerta OR
    if (multiplexor1 === "0" && multiplexor2 === "0" ) {
        OR(binario1, binario2)

        //Compuerta AND
    } else if (multiplexor1 === "1" && multiplexor2 === "0") {
        AND(binario1, binario2)

        //Compuerta  NOT
    } else if (multiplexor1 === "1" && multiplexor2 === "1") {
        NOT(binario1)

        }
        //Compuerta XOR
        else if (multiplexor1 === "0" && multiplexor2 === "1") {
        XOR(binario1, binario2)  

        }
    }




    
