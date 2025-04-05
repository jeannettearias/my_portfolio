import '../../styles/exp/_expChart.scss';
import { AgCharts } from 'ag-charts-react';
import PropTypes from 'prop-types';

// Chart component
function ExpChart({ expChart }) {

    // Ensure expChart is not undefined
    if (!expChart || !Array.isArray(expChart.data) || expChart.data.length === 0) {
        return <p>No data available</p>;
    }

    // Normalize the data format based on chart type
    const normalizeData = expChart.data.map((item) => {
        return expChart.graphic_type === "bubble"
            ? {
                x: item.xKey,
                y: parseFloat(item.yKey), // convert "88%" → 88
                size: item.sizeyKey
            }
            : {
                x: item.xKey,
                y: item.yKey
            };
    });

    // Chart Options: Control & configure the chart
    const chartOptions = {
        data: normalizeData,
        series: [
            expChart.graphic_type === 'bubble'
                ? {
                    type: 'bubble',
                    xKey: 'x',
                    yKey: 'y',
                    sizeKey: 'size',
                    fill: 'rgb(113, 19, 113)',
                    stroke: '#7d3c98',
                    fillOpacity: 0.7,
                    strokeWidth: 1,
                }
                : {
                    type: 'bar',
                    xKey: 'x',
                    yKey: 'y',
                    fill: 'rgb(113, 19, 113)'
                }
        ],

        title: {
            text: expChart.achievement_title
        },

        legend: {
            enabled: false
        },
        axes: [
            {
                type: 'category',
                position: 'bottom'
            },
            {
                type: 'number',
                position: 'left'
            }
        ],
        tooltip: {
            enabled: true,
            renderer: ({ datum }) => ({
                content: expChart.graphic_type === 'bubble'
                    ? `${datum.x}: ${datum.y}% (size: ${datum.size})`
                    : `${datum.x}: ${datum.y}`
            })
        }
    };


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