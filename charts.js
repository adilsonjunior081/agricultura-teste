/**
 * Agricultura de Gravatá - Charts JavaScript
 */

// Importar Chart.js se não estiver disponível no escopo global
if (typeof Chart === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    document.head.appendChild(script);
    
    // Plugin de datalabels
    const datalabelsScript = document.createElement('script');
    datalabelsScript.src = 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0';
    datalabelsScript.async = true;
    document.head.appendChild(datalabelsScript);
}

document.addEventListener('DOMContentLoaded', function() {
    // Verificar se os elementos dos gráficos existem
    const productionChart = document.getElementById('productionChart');
    const distributionChart = document.getElementById('distributionChart');
    
    // Inicializar gráficos se existirem
    if (productionChart) {
        initProductionChart();
    }
    
    if (distributionChart) {
        initDistributionChart();
    }
    
    // Inicializar filtros
    initChartFilters();
});

// Gráfico de Produção Mensal
function initProductionChart() {
    const ctx = document.getElementById('productionChart').getContext('2d');
    
    // Dados para o gráfico
    const productionData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Abacaxi',
                data: [120, 130, 125, 140, 160, 155, 150, 170, 180, 190, 185, 195],
                backgroundColor: '#FC9F1C',
                borderColor: '#FC9F1C',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            },
            {
                label: 'Banana',
                data: [90, 85, 95, 100, 110, 115, 120, 125, 130, 120, 115, 110],
                backgroundColor: '#2CB1A3',
                borderColor: '#2CB1A3',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            },
            {
                label: 'Goiaba',
                data: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
                backgroundColor: '#EB3C3B',
                borderColor: '#EB3C3B',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            },
            {
                label: 'Cará',
                data: [45, 50, 53, 58, 65, 70, 75, 78, 82, 85, 80, 75],
                backgroundColor: '#60442F',
                borderColor: '#60442F',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            },
            {
                label: 'Chuchu',
                data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 68, 65, 60],
                backgroundColor: '#8a6344',
                borderColor: '#8a6344',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            },
            {
                label: 'Orgânicos',
                data: [15, 18, 22, 25, 30, 35, 40, 45, 50, 52, 48, 45],
                backgroundColor: '#5ec8bd',
                borderColor: '#5ec8bd',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }
        ]
    };

    // Filtro por ano
    const productionDataByYear = {
        'all': productionData,
        '2023': {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [
                {
                    label: 'Abacaxi',
                    data: [110, 120, 115, 130, 150, 145, 140, 160, 170, 180, 175, 185],
                    backgroundColor: '#FC9F1C',
                    borderColor: '#FC9F1C',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Banana',
                    data: [80, 75, 85, 90, 100, 105, 110, 115, 120, 110, 105, 100],
                    backgroundColor: '#2CB1A3',
                    borderColor: '#2CB1A3',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Goiaba',
                    data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
                    backgroundColor: '#EB3C3B',
                    borderColor: '#EB3C3B',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Cará',
                    data: [40, 45, 48, 52, 58, 63, 68, 70, 75, 78, 75, 70],
                    backgroundColor: '#60442F',
                    borderColor: '#60442F',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Chuchu',
                    data: [25, 30, 35, 40, 45, 50, 55, 60, 63, 60, 55, 52],
                    backgroundColor: '#8a6344',
                    borderColor: '#8a6344',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Orgânicos',
                    data: [12, 15, 18, 22, 26, 30, 35, 40, 43, 45, 42, 38],
                    backgroundColor: '#5ec8bd',
                    borderColor: '#5ec8bd',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        '2024': {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [
                {
                    label: 'Abacaxi',
                    data: [130, 140, 135, 150, 170, 165, 160, 180, 190, 200, 195, 205],
                    backgroundColor: '#FC9F1C',
                    borderColor: '#FC9F1C',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Banana',
                    data: [100, 95, 105, 110, 120, 125, 130, 135, 140, 130, 125, 120],
                    backgroundColor: '#2CB1A3',
                    borderColor: '#2CB1A3',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Goiaba',
                    data: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125],
                    backgroundColor: '#EB3C3B',
                    borderColor: '#EB3C3B',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Cará',
                    data: [50, 55, 58, 63, 68, 75, 80, 85, 88, 90, 85, 80],
                    backgroundColor: '#60442F',
                    borderColor: '#60442F',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Chuchu',
                    data: [35, 40, 45, 50, 55, 60, 65, 70, 75, 73, 70, 65],
                    backgroundColor: '#8a6344',
                    borderColor: '#8a6344',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Orgânicos',
                    data: [18, 22, 25, 30, 35, 40, 45, 50, 55, 58, 54, 50],
                    backgroundColor: '#5ec8bd',
                    borderColor: '#5ec8bd',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        }
    };
    
    // Configurações do gráfico
    const config = {
        type: 'line',
        data: productionData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Toneladas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mês'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        },
                        padding: 15
                    },
                    title: {
                        display: true,
                        text: 'Culturas',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#333',
                    bodyColor: '#333',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    cornerRadius: 6,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + ' ton';
                        }
                    }
                }
            }
        }
    };
    
    // Criar gráfico
    window.productionChart = new Chart(ctx, config);
    
    // Guardar referência aos dados para filtrar
    window.productionDataByYear = productionDataByYear;
}

// Gráfico de Distribuição de Área
function initDistributionChart() {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    
    // Dados para o gráfico de pizza
    const data = {
        labels: ['Abacaxi', 'Banana', 'Cará', 'Chuchu', 'Goiaba', 'Orgânicos'],
        datasets: [{
            label: 'Área em Hectares',
            data: [750, 450, 275, 200, 225, 175],
            backgroundColor: [
                '#FC9F1C',
                '#2CB1A3',
                '#EB3C3B',
                '#60442F',
                '#8a6344',
                '#5ec8bd'
            ],
            borderWidth: 1
        }]
    };
    
    // Configurações do gráfico
    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#333',
                    bodyColor: '#333',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    cornerRadius: 6,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = Math.round((value / total) * 100);
                            return label + ': ' + value + ' hectares (' + percentage + '%)';
                        }
                    }
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        const total = ctx.dataset.data.reduce((acc, val) => acc + val, 0);
                        const percentage = Math.round((value / total) * 100);
                        return percentage + '%';
                    },
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 11
                    }
                }
            }
        }
    };
    
    // Criar gráfico
    window.distributionChart = new Chart(ctx, config);
}

// Filtros para os gráficos
function initChartFilters() {
    // Filtros para o gráfico de produção
    const filterButtons = document.querySelectorAll('.chart-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar dados do gráfico pelo ano selecionado
            const year = this.getAttribute('data-year');
            
            if (window.productionChart && window.productionDataByYear) {
                const newData = window.productionDataByYear[year];
                
                // Atualizar dados do gráfico
                window.productionChart.data.labels = newData.labels;
                window.productionChart.data.datasets = newData.datasets;
                
                // Atualizar gráfico
                window.productionChart.update();
            }
        });
    });
} 