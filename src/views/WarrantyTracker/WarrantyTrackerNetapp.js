import React from 'react';
import Table from 'components/Table/Table.js';

//data
import {
  data,
  columns,
  WarrantyTrackerDashItems
} from 'assets/data/WarrantyData/WarrantyTrackerData-Netapp.js';
import Dash from 'components/Dash/Dash.js';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        <Dash
          title={'Netapp Warranty Tracker'}
          items={WarrantyTrackerDashItems}
        />
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default Tables;
