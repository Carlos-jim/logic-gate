// Compuertas logicas

//compuerta AND
function AND(a, b) {
    // Inicializa una variable para almacenar el resultado
    let result = "";

    
    // Itera sobre cada elemento de los arrays 'a' y 'b'
    for (let i = 0; i < a.length; i++) {
          // Realiza una operación AND bit a bit entre los elementos correspondientes de 'a' y 'b'
    result += a[i] & b[i];
    }
    // Imprime el resultado
    document.getElementById('resultado').value = result
    console.log(result)
}
    
//compuerta OR
function OR(a, b) {
    let result = ""
    // En cada iteración del bucle, se utiliza el operador OR (|) 
    //para comparar el elemento actual de la primera secuencia (a[i]) 
    //con el elemento correspondiente de la segunda secuencia (b[i]).
    for (let i = 0; i < a.length; i++) {
        result += a[i] | b[i]
    }

    document.getElementById('resultado').value = result
    console.log(result)
}
    
//compuerta NOT
function NOT(a) {
    
    // Divide la cadena de entrada en un arreglo de caracteres.
    // Usa la función map para aplicar la operación NOT a cada bit en el arreglo de entrada
    // Une el arreglo resultante en una cadena
    // Establece el valor del elemento con id 'resultado' al resultado de la operación NOT
    document.getElementById('resultado').value = a.split('').map(bit => bit === "0" ? "1" : "0").join('');

}

//compuerta XOR
function XOR(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] ^ b[i])
    }
    document.getElementById('resultado').value =  result.join("")
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

    document.getElementById('resultado').readOnly = true;




    
