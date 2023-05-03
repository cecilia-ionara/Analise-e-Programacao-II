(async function () {
new Chart(
    document.getElementById('grafico2'),
    {
        type: 'line',
        data: {
            labels: [
                "Janeiro", "Fevereiro",
                "Março", "Abril", "Maio",
                "Junho", "Julho",
                "Agosto", "Setembro", "Outubro",
                "Novembro", "Dezembro"
            ],
            datasets: [
                {
                    label: 'Total de faltas',
                    data: [0, 3, 2, 3, 5, 3, 3, 2, 3, 0, 9, 1]
                }
            ]
        }
    }
)
})();
