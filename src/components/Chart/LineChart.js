import React from 'react';
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const DoughnutChart = ({ data, options }) => {
    return (
        <>
            <Card className='card card-chart'>
                <CardHeader>
                    <h5 className='card-category'>{options.category}</h5>
                    <CardTitle tag='h3'>
                        <i className={`${options.icon}`} />
                        {options.title}
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <div className='chart-area'>
                        <Line data={data} options={options} />
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default DoughnutChart;
