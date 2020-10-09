import React from 'react';
import Table from '../components/Table/Table';
import { Row, Col, Card, CardBody } from 'reactstrap';

//data
import {
  data,
  columns,
  SystemInfoDashItems
} from '../assets/data/SystemInfoData.js';
import Dash from '../components/Dash/Dash';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <h1 className="title text-center">System Info</h1>
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
                  Data Information Metric Overview
                </h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Dash items={SystemInfoDashItems} />
            <Table data={data} columns={columns} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tables;
