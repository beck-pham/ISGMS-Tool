import React from 'react';
import Table from '../components/Table/Table';
import { Row, Col } from 'reactstrap';
//data
import { data, columns } from '../assets/data/InventoryData.js';
//import Dash from '../components/Dash/Dash';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <h1 className="title text-center">Storage Inventory</h1>
          </Col>
        </Row>
        {/* <Dash title={'Data Metric Overview'} items={SystemInfoDashItems} /> */}
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default Tables;
