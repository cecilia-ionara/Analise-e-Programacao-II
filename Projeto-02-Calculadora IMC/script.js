const btncalcular = document.getElementById('btncalcular')
const sexo = document.getElementById('sexo')
const imagemresultado = document.getElementById('imagemresultado')
const resultado = document.getElementById('resultado')

btncalcular.addEventListener("click", function (e) {
    e.preventDefault()
    const imc = peso.value / (altura.value * altura.value)
    resultado.innerHTML = 'Seu IMC é ' + imc.toFixed(2)

    if (sexo.value == 'masculino') {
        if (imc < 18.5) {
            imagemresultado.innerHTML = `<img src='images/m-magreza.png' alt='Magreza' >`
        } else if (imc >= 18.5 && imc <= 24.9) {
            imagemresultado.innerHTML = `<img src = 'images/m-normal.png' alt='Normal'>`

        } else if (imc >= 25 && imc <= 29.9) {
            imagemresultado.innerHTML = `<img src = 'images/m-sobrepeso.png' alt='Sobrepeso'>`

        } else if (imc >= 30 && imc <= 39.9) {
            imagemresultado.innerHTML = `<img src = 'images/m-obesidade.png' alt='Obesidade'>`

        } else if (imc > 40) {
            imagemresultado.innerHTML = `<img src = 'images/m-obesidade-grave.png' alt='Obesidade'>`
        }
    }

    if (sexo.value == 'feminino') {
        if (imc < 18.5) {
            imagemresultado.innerHTML = `<img src = 'images/f-magreza.png' alt='Magreza'>`

        } else if (imc >= 18.5 && imc <= 24.9) {
            imagemresultado.innerHTML = `<img src = 'images/f-normal.png' alt='Normal'>`

        } else if (imc >= 25 && imc <= 29.9) {
            imagemresultado.innerHTML = `<img src = 'images/f-sobrepeso.png' alt='Sobrepeso'>`

        } else if (imc >= 30 && imc <= 34.9) {
            imagemresultado.innerHTML = `<img src = 'images/f-obesidadeI.png' alt='ObesidadeI'>`

        } else if (imc >= 35 && imc <= 39.9) {
            imagemresultado.innerHTML = `<img src = 'images/f-obesidadeII.png' alt='ObesidadeII'>`

        } else if (imc > 40) {
            imagemresultado.innerHTML = `<img src = 'images/f-obesidadeIII.png' alt='ObesidadeIII'>`
        }
    }

})