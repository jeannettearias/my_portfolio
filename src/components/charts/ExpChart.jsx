import '../../styles/exp/_expChart.scss';
import { AgCharts } from 'ag-charts-react';
import { useState } from 'react';


function ExpChart() {
    // Chart Options: Control & configure the chart
    const [chartOptions, setChartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
    });

    return (
        <>
            <div className='Chart'>
                <h2 className='Chart__title'>Ice Cream Sales</h2>
                {/* AgCharts component with options passed as prop */}
                <AgCharts options={chartOptions} />
            </div>
        </>
    );
}


export default ExpChart;