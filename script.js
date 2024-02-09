function Soma() {
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")

    const Numero1 = Number (valor1.value)
    const Numero2 = Number (valor2.value)
    
    const soma = Numero1 + Numero2

    document.getElementById("resultado").innerText = "resultado: " + soma
}
