
/*botao.addEventListener("click", function (event) {
    event.preventDefault()
    let valor = document.querySelector('#valor')
    let resultado = document.querySelector('#resultado')
    console.log(resultado)
    resultado.innerHTML = Math.pow(valor.value, 2)
        resultado.innerHTML = Math.sqrt(valor.value)   //raiz quadrada//  
        resultado.innerHTML = Math.sin(valor.value)      //seno//
    
})*/

let botao = document.querySelector('#calcular')

const ctx = document.getElementById('myChart')

botao.addEventListener("click", function (event) {
    event.preventDefault()

    let valor = document.querySelector('#valor').value
    let xMin = document.querySelector('#xMin').value
    let xMax = document.querySelector('#xMax').value

    let x = xMin
    let y = []
    let labels = []

    while (x <= xMax) {
        y.push(valor * x)
        labels.push(x)
        x++
    }

    const data = {
        labels,
        datasets: [{
            data: y,
            label: 'Função Linear'
        }]
    }
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true
        }
    }
    const myChart = new Chart(
        ctx,
        config
    )
})