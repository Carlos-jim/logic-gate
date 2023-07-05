// Compuertas logicas
function AND(a, b) {
    resultado = a && b
    console.log(resultado)
}
    
function OR(a, b) {
    resultado = a || b;
    console.log(resultado)
}
    
function NOT(a) {
    resultado =  !a;
    console.log(resultado)
}
    
function XOR(a, b) {
    resultado = (a || b) && !(a && b)
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

        //Compuerta XOR
    }  else if (multiplexor1 === "0" && multiplexor2 === "1") {
        XOR(binario1, binario2)  
    }

}