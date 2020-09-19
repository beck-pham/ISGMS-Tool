import React from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';
//local components
import Dash from '../components/Dash/Dash';
import TicketForm from '../components/Form/TicketForm';
import MultiBarChart from '../components/Chart/MultiBarChart';
//data
import { iTicketDashItems } from '../assets/data/iTicketDashData';
import { chartITicket } from '../assets/data/charts/';

const Ticket = () => {
    console.log(chartITicket);
    return (
        <>
            <div className='content'>
                <Row>
                    <Col md='12'>
                        <Dash items={iTicketDashItems} />
                    </Col>
                    <Col xs='8' className='mx-auto'>
                        <MultiBarChart
                            title='test'
                            data={chartITicket}
                            options={chartITicket.options}
                        ></MultiBarChart>
                    </Col>
                    <Col md='12'>
                        <TicketForm></TicketForm>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Ticket;
