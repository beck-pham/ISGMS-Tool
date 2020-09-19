import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ title, data, options }) => {
    return (
        <>
            <Card className='card-plain card-chart'>
                <CardTitle tag='h3'>{title}</CardTitle>
                <CardBody>
                    <div className='chart-area'>
                        <Doughnut data={data} options={options} />
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default DoughnutChart;
