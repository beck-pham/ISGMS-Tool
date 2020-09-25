import React from 'react';
import Table from '../components/Table/Table';

//data
import { data, columns } from '../assets/data/InventoryData.js';
//import Dash from '../components/Dash/Dash';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        {/* <Dash title={'Data Metric Overview'} items={SystemInfoDashItems} /> */}
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default Tables;
