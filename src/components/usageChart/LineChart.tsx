import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    const labels = Array.from(Array(60).keys())
        .reverse()
        .map((value) => {
            if (value === 0) return 'Teraz';
            if (value === 1) return '1 minutę temu';
            if (value >= 2 && value <= 4) return `${value} minuty temu`;
            return `${value} minut temu`;
        });
    return (
        <div style={{ height: '30vh', width: '90vw', margin: '20px' }}>
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: props.data,
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: props.label,
                        },
                        legend: {
                            display: false,
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default LineChart;
