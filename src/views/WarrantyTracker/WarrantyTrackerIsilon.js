import React from 'react';
import Table from 'components/Table/Table.js';

//data
import {
  data,
  columns,
  WarrantyTrackerIsilonDashItems
} from 'assets/data/WarrantyData/WarrantyTrackerData-Isilon.js';
import Dash from 'components/Dash/Dash.js';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        <Dash
          title={'Isilon Warranty Tracker'}
          items={WarrantyTrackerIsilonDashItems}
        />
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default Tables;
