import '../../styles/exp/_expChart.scss';
import { AgCharts } from 'ag-charts-react';
import { useState } from 'react';


function ExpChart() {
    // Chart Options: Control & configure the chart
    const [chartOptions, setChartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: [
            { month: "04-2024", value: 10 },
            { month: "05-2024", value: 20 },
            { month: "06-2024", value: 30 },
            { month: "07-2024", value: 40 },
            { month: "08-2024", value: 50 },
            { month: "09-2024", value: 10 },
            { month: "10-2024", value: 70 },
            { month: "11-2024", value: 80 },
            { month: "12-2024", value: 90 },
            { month: "01-2025", value: 10 },
            { month: "02-2025", value: 110 },
            { month: "03-2025", value: 20 },
            { month: "04-2025", value: 130 },
        ],
        // Series: Defines which chart type and data to use
        series: [{
            type: 'bar',
            xKey: 'month',
            yKey: 'value'
        }],
        // Title: Chart title
        title: {
            text: 'Roadmap predictivity, and throughput'
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
                position: 'left'
            }
        ],
    });

    return (
        <>
            <div className='Chart'>
                <div className='Chart__header'>
                    <h2 className='Chart__title'>Roadmap Impact</h2>
                </div>
                <div className='Chart__content'>
                    <AgCharts options={chartOptions}
                        className='Chart__container'
                    />
                </div>



            </div>
        </>
    );
}



export default ExpChart;