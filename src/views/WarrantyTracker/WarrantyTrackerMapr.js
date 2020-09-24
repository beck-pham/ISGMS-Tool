import React from 'react';
import Table from 'components/Table/Table.js';

//data
import {
  data,
  columns,
  WarrantyTrackerMaprDashItems
} from 'assets/data/WarrantyData/WarrantyTrackerData-Mapr.js';
import Dash from 'components/Dash/Dash.js';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        <Dash title={'Warranty Tracker'} items={WarrantyTrackerMaprDashItems} />
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default Tables;
