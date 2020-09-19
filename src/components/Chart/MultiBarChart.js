import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import classNames from 'classnames';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

const MultiLineChart = ({ data, options }) => {
    const [bigChartData, setBigChartData] = useState(options.groups[0]);
    return (
        <>
            <Card className='card-chart'>
                <CardHeader>
                    <Row>
                        <Col className='text-left' sm='6'>
                            <h5 className='card-category'>
                                {options.category}
                            </h5>
                            <CardTitle tag='h2'>
                                <i className={`${options.icon}`} />
                                {bigChartData}
                            </CardTitle>
                        </Col>
                        <Col sm='6'>
                            <ButtonGroup
                                className='btn-group-toggle float-right'
                                data-toggle='buttons'
                            >
                                {options.groups &&
                                    options.groups.map((group) => (
                                        <Button
                                            tag='label'
                                            className={classNames(
                                                'btn-simple',
                                                {
                                                    active:
                                                        bigChartData ===
                                                        `${group}`
                                                }
                                            )}
                                            color='info'
                                            id='0'
                                            size='sm'
                                            onClick={() =>
                                                setBigChartData(`${group}`)
                                            }
                                        >
                                            <input
                                                defaultChecked
                                                className='d-none'
                                                name='options'
                                                type='radio'
                                            />
                                            <span className='d-none d-sm-block d-md-block d-lg-block d-xl-block'>
                                                {group}
                                            </span>
                                        </Button>
                                    ))}
                            </ButtonGroup>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className='chart-area'>
                        <Bar data={data[bigChartData]} options={data.options} />
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default MultiLineChart;
