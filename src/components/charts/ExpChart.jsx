import '../../styles/exp/_expChart.scss';
import { AgCharts } from 'ag-charts-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

// Chart component
function ExpChart({ expChart }) {

    // Chart Options: Control & configure the chart
    const [chartOptions, setChartOptions] = useState({

        // Data: Chart data
        data: expChart.data,
        // Series: Defines which chart type and data to use
        series: [{
            type: expChart.graphic_type,
            xKey: expChart.data.xKey,
            yKey: expChart.data.yKey,
            fill: {
                background: 'rgb(151, 49, 151)',
            }, // Change this to your desired color
        }],
        // Title: Chart title
        title: {
            text: expChart.achievement_title,

        },
        // Legend: Chart legend
        legend: {
            enabled: false
        },
        // Axes: Configure chart axes
        axes: [
            {
                type: 'category',
                position: 'bottom'
            },
            {
                type: 'number',
                position: 'left',
                tick: {
                    interval: 10 // Set the interval to display more ticks
                }
            }
        ],
    });

    return (
        <>
            <div className='Chart'>
                <div className='Chart__header'>
                </div>
                <div className='Chart__content'>
                    <AgCharts options={chartOptions}

                        className='Chart__container'
                    />
                    <div className='time__line'>
                        <div className='chart__dates'>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

ExpChart.propTypes = {
    setChartOptions: PropTypes.func,
    chartOptions: PropTypes.object,
    expChart: PropTypes.array,
    expJson: PropTypes.object
};

export default ExpChart;