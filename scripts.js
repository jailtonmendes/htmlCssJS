function somarDoisNumeros() {
    var primeiroNumero = document.getElementById
    ("primeiroNumero").value;

    var segundoNumero = document.getElementById
    ("segundoNumero").value;

    var resultado = Number(primeiroNumero) + Number(segundoNumero)
    document.getElementById("resultado").innerHTML = primeiroNumero + "+" + segundoNumero + " = " + resultado;

}

function verificarSaldo() {
    var saldo = document.getElementById("saldo").value;

    if (saldo >= 0) {
        document.getElementById("farol")
        .style.backgroundColor = "green";
    } else {
        document.getElementById("farol")
        .style.backgroundColor = "red"
    }
}

function gerarNumeros() {
    var sorteados = document.getElementById("sorteados").value;
    

    var sorteados = Math.floor(Math.random() * 10);
    document.getElementById("sorteados").innerHTML = sorteados =  Math.floor(Math.random() * 60) + 1;

}

