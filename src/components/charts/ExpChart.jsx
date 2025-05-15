import '../../styles/exp/_expChart.scss';
import { AgCharts } from 'ag-charts-react';
import PropTypes from 'prop-types';

// Chart component
function ExpChart({ expChart }) {
    // Show image if data is missing or chart is disabled
    if (
        !expChart ||
        !Array.isArray(expChart.data) ||
        expChart.data.length === 0 ||
        expChart.graphic_flag !== true
    ) {
        return (
            <img
                className="project-image"
                src={import.meta.env.BASE_URL + expChart.project_picture}
                alt=""
            />
        );

    }

    // Normalize the data format based on chart type
    const normalizeData = expChart.data.map((item) => {
        return expChart.graphic_type === "bubble"
            ? {
                x: item.xKey,
                y: parseFloat(item.yKey), // convert "88%" → 88
                size: parseFloat(item.sizeyKey)
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
                    fill: 'rgba(17, 141, 56, 0.71)',
                    stroke: '#7d3c98',
                    fillOpacity: 0.7,
                    strokeWidth: 1,
                    tooltip: {
                        renderer: ({ datum }) => ({
                            content: `${datum.xKey}: ${datum.yKey}`
                        })
                    }
                }
                : {
                    type: 'bar',
                    xKey: 'x',
                    yKey: 'y',
                    fill: 'rgb(113, 19, 113)',
                    tooltip: {
                        renderer: ({ datum }) => ({
                            content: `${datum.xKey}: ${datum.yKey}`
                        })
                    }
                }
        ],


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
    };

    return (
        <>
            <div className='Chart'>

                <div className='Chart__header'>
                    <h2 className='Chart__title'>{expChart.achievement_title}</h2> {/* Displaying the achievement title */}
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