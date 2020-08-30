var c = 4

function contar() {
    c -= 1
    document.getElementById("intentos").innerHTML = ("Tienes: "+c + " intentos")
    if (c == 0) {
        document.getElementById("resultado").innerHTML = ("Te quedaste sin intentos")
    }

    
}
function capturar() {
    document.getElementById("btns2").disabled = true
    var respuesta = document.getElementById("Resp").value;
    if (respuesta === "blanco" ) {
        document.getElementById("resultado").innerHTML = ("ganaste!! sos un genio!! era blanco!!");
        document.getElementById("btns").disabled = true
        document.getElementById("btns2").disabled = false
    }
    else {
        document.getElementById("resultado").innerHTML = ("no es correcto te quedan: ");
    }
    if (c == 2 && respuesta != "blanco") {
        document.getElementById("pista1").innerHTML = ("Pista 1: empieza con b")
    }
    if (c == 1 && respuesta != "blanco") {
        document.getElementById("pista2").innerHTML = ("Pista 2: termina con o")
    }
    if (c === 0 && respuesta != "blanco" )  {
        document.getElementById("resultado").innerHTML = ("Te quedaste sin intentos")
        document.getElementById("btns").disabled = true
        document.getElementById("btns2").disabled = false
        
    }
} function reiniciar() {
    location.reload(true);
}

