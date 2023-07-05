// Compuertas logicas
function AND(a, b) {
    return a && b;
}
    
function OR(a, b) {
    return a || b;
}
    
function NOT(a) {
    return !a;
}
    
function XOR(a, b) {
    return (a || b) && !(a && b);
}


//guardamos las variables del multiplexor
function guardar_multiplexor() {

    let multiplexor1 = document.getElementById("input_multi1").value
    let multiplexor2 = document.getElementById("input_multi2").value
    console.log(multiplexor1)
    console.log(multiplexor2)

    multiplexor(multiplexor1, multiplexor2)
}

function multiplexor(multiplexor1, multiplexor2){
    if (multiplexor1 === "0" && multiplexor2 === "0" ) {
        console.log("hola uwu")
    }

}