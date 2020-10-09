import React from 'react';
// reactstrap components
import { Row, Col, Card, CardBody } from 'reactstrap';
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
      <div className="content">
        <Row>
          <Col md="12">
            <h1 className="title text-center">iTicket</h1>
            <Card className="card-plain">
              <CardBody style={{ textAlign: 'center' }}>
                <h4
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '1.5rem',
                    letterSpacing: '1px',
                    fontWeight: '300'
                  }}
                >
                  Breakfix Ticket For the Last 6 months
                </h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Dash items={iTicketDashItems} />
          </Col>
          <Col xs="8" className="mx-auto">
            <MultiBarChart
              title="test"
              data={chartITicket}
              options={chartITicket.options}
            ></MultiBarChart>
          </Col>
          <Col md="12">
            <TicketForm></TicketForm>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Ticket;
