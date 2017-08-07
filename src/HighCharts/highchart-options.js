import Highcharts from 'highcharts';

export let highChartOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: false,

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '10px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: 105 - labelWidth / 2,
                y: 75
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '100%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.2)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '99%',
            innerRadius: '87%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.2)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '86%',
            innerRadius: '74%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.2)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: '#5A68C6',
            radius: '112%',
            innerRadius: '100%',
            y: 98
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: '#FFD331',
            radius: '99%',
            innerRadius: '87%',
            y: 15
        }]
    }, {
        name: 'Stand',
        data: [{
            color: '#F65161',
            radius: '86%',
            innerRadius: '74%',
            y: 7
        }]
    }]
};