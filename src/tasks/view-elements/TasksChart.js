import React from 'react';
import { Chart } from 'react-charts'

const TasksChart = ({tasksData}) => {

    const chartData = Object.keys(tasksData).map(key => {
        return {
            primary: key,
            secondary: tasksData[key],
        }
    }).filter(task => {
        return task.secondary > 0;
    });

    const data = React.useMemo(
        () => [
            {
                label: 'Tasks',
                data: [
                    ...chartData,
                ],
            },
        ],
        [chartData]
    );
    const series = React.useMemo(
        () => ({
            type: "bar"
        }),
        []
    );
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom'},
            { type: 'linear', position: 'left', hardMin: 0},
        ],
        []
    );

    return (
        <div
            style={{
                width: '400px',
                height: '300px',
            }}
        >
            <Chart data={data} series={series} axes={axes} />
        </div>
    )
}

export default TasksChart;