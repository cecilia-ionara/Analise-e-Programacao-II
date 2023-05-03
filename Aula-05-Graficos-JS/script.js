(async function () {
    new Chart(
        document.getElementById('grafico1'),
        {
            type: 'bar',
            data: {
                labels: [
                    "Português", "Matemática",
                    "Bilogia", "Química", "Redes"
                ],
                datasets: [
                    {
                        label: 'Média de Notas',
                        data: [10, 9, 8, 8, 5]
                    }
                ]
            }
        }
    )
})();

  