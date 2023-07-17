
// Compuertas logicas

//compuerta AND
function AND(a, b) {
    document.getElementById('resultado').value =  a.map((x, i) => x & b[i]).join('');
}
    
//compuerta OR
function OR(a, b) {
    document.getElementById('resultado').value =  a.map((x, i) => x | b[i]).join('');
}
    
//compuerta NOT
function NOT(a) {

    // Usa la función map para aplicar la operación NOT a cada bit en el arreglo de entrada
    // Une el arreglo resultante en una cadena
    // Establece el valor del elemento con id 'resultado' al resultado de la operación NOT
    document.getElementById('resultado').value = a.map(bit => bit === "0" ? "1" : "0").join('');

}

//compuerta XOR
function XOR(a, b) {
    document.getElementById('resultado').value = a.map((x, i) => x ^ b[i]).join('');
}


//guardamos las variables
function guardar() {

    let multiplexor1 = document.getElementById("input_multi1").value;
    let multiplexor2 = document.getElementById("input_multi2").value;
    let binario1 = document.getElementById("input_bina1").value.split('');
    let binario2 = document.getElementById("input_bina2").value.split('');
    //console.log(binario1)
    //console.log(binario2)
    //console.log(multiplexor1)
    //console.log(multiplexor2)

    if (binario1.length == binario2.length) {
        multiplexor(multiplexor1, multiplexor2, binario1, binario2)
    } else {
        alert("Ingrese la misma longitud en cada entrada, intentelo de nuevo")
    }
}


//Multiplexor
function multiplexor(multiplexor1, multiplexor2, binario1, binario2){
        var img = document.getElementById("mux");

            img.animate(
                [
                    { backgroundColor: "transparent" },
                    { backgroundColor: "yellow" },
                    { backgroundColor: "transparent" }
                ],
                {
                    duration: 2000,
                    iterations: Infinity
                }
            );
    switch (multiplexor1 + multiplexor2) {
        case "00":
            OR(binario1, binario2);
            //Animacion de la compuerta
            var img = document.getElementById("OR");
                img.animate(
                [
                    { backgroundColor: "transparent" },
                    { backgroundColor: "yellow" },
                    { backgroundColor: "transparent" }
                ],
                {
                    duration: 2000,
                    iterations: Infinity
                }
                );
            break;
        case "10":
            AND(binario1, binario2);

            //Animacion de la compuerta
            var img = document.getElementById("AND");
            img.animate(
                [
                    { backgroundColor: "transparent" },
                    { backgroundColor: "yellow" },
                    { backgroundColor: "transparent" }
                ],
                {
                    duration: 2000,
                    iterations: Infinity
                }
                );
            break;
        case "11":
            NOT(binario1);
            //Animacion de la compuerta
            var img = document.getElementById("NOT");
            img.animate(
                [
                    { backgroundColor: "transparent" },
                    { backgroundColor: "yellow" },
                    { backgroundColor: "transparent" }
                ],
                {
                    duration: 2000,
                    iterations: Infinity
                }
                );
            break;
        case "01":
            XOR(binario1, binario2);
            //Animacion de la compuerta
            var img = document.getElementById("XOR");
            img.animate(
                [
                    { backgroundColor: "transparent" },
                    { backgroundColor: "yellow" },
                    { backgroundColor: "transparent" }
                ],
                {
                    duration: 2000,
                    iterations: Infinity
                }
                );
            break;
    }        
}

//El resultado sera de solo lectura
document.getElementById('resultado').readOnly = true;


document.getElementById('refresh-button').addEventListener('click', function() {
    location.reload();
});



    
