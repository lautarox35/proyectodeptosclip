var c = 4

function contar() {
    c -= 1
    document.getElementById("intentos").innerHTML = (c + " intentos")
    if (c == 0) {
        document.getElementById("resultado").innerHTML = ("Te quedaste sin intentos")
    }

    
}
function capturar() {
    document.getElementById("btns2").disabled = true
    var respuesta = document.getElementById("Resp").value;
    if (respuesta === "Norberto Silva"  ) {
        document.getElementById("resultado").innerHTML = ("ganaste!! sos un genio!! era  Norberto Silva!!");
        document.getElementById("btns").disabled = true
        document.getElementById("btns2").disabled = false
    }
    else {
        document.getElementById("resultado").innerHTML = ("no es correcto te quedan: ");
    }
    if (c == 2 && respuesta != "Norberto Silva") {
        document.getElementById("pista1").innerHTML = ("Pista 1: su nombre empieza con N")
    }
    if (c == 1 && respuesta != "Norberto Silva") {
        document.getElementById("pista2").innerHTML = ("Pista 2: su apellido empieza con S")
    }
    if (c === 0 && respuesta != "Norberto Silva" )  {
        document.getElementById("resultado").innerHTML = ("Te quedaste sin intentos")
        document.getElementById("btns").disabled = true
        document.getElementById("btns2").disabled = false
        
    }
} function reiniciar() {
    location.reload(true);
}

