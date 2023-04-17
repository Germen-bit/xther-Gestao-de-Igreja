<template lang="">
    <div class="container-fluid row g-3 mt-4">
        <p class="h3">Relatorios</p>
        <div style="width: 100%;"><canvas id="acquisitions"></canvas></div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto'

export default {
    methods: {
        createChart() {
            const dados = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ]

            new Chart(document.getElementById('acquisitions'),
                {
                    type: 'bar',
                    data: {
                        labels: dados.map(row => row.year),
                        datasets: [{
                            label: 'Acquisitions by year',
                            data: dados.map(row => row.count)
                        }]
                    }
                })
        }
    },
    mounted() {
        this.createChart()
    }
}
</script>
<style lang="">
    
</style>