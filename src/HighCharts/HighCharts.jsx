import React, {Component} from 'react';
// Load Highcharts
import Highcharts from 'highcharts';
import 'highcharts/highcharts-more';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import {highChartOptions} from './highchart-options';

class HighChart extends Component {
    componentDidMount() {
        HighchartsMore(Highcharts);
        SolidGauge(Highcharts);

        Highcharts.chart('chart-container', highChartOptions);
    }

    render() {
        return (
            <div id="chart-container" style={{width: '215px', height: '215px', margin: '0 auto', float: 'right'}}></div>
        );
    }
}

export default HighChart;
