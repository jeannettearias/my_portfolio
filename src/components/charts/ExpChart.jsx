import '../../styles/exp/_expChart.scss';
import { AgCharts } from 'ag-charts-react';
import PropTypes from 'prop-types';

// Chart component
function ExpChart({ expChart }) {

    // Ensure expChart is not undefined
    if (!expChart || !expChart.data) {
        return <p>No data available</p>;
    }
    // Chart Options: Control & configure the chart
    const chartOptions = ({

        // Chart Options: Control & configure the chart
        data: expChart.data,
        // Series: Chart series
        series: [{
            type: expChart.graphic_type,
            xKey: "xKey", // Use string
            yKey: "yKey", // Use string
            fill: 'rgb(206, 54, 206)' // Set the fill color
        }],

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
    expChart: PropTypes.object.isRequired
};

export default ExpChart;