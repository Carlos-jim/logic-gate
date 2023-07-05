document.getElementById("logicForm").addEventListener("submit", function(event){
    event.preventDefault()
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let gate = document.getElementById("gate").value;
    let result;
    if (gate === "and") {
        result = input1 & input2;
    } else if (gate === "or") {
        result = input1 | input2;
    } else if (gate === "xor") {
        result = input1 ^ input2;
    } else if (gate === "nand") {
        result = ~(input1 & input2);
    } else if (gate === "nor") {
        result = ~(input1 | input2);
    } else if (gate === "xnor") {
        result = ~(input1 ^ input2);
    }
    document.getElementById("result").textContent = result;
});