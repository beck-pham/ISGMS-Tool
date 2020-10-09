import React from 'react';
import Table from 'components/Table/Table.js';

//data
import {
  data,
  columns,
  WarrantyTrackerAvereDashItems
} from 'assets/data/WarrantyData/WarrantyTrackerData-Avere.js';
import Dash from 'components/Dash/Dash.js';

class Tables extends React.Component {
  render() {
    return (
      <div className="content">
        <Dash
          title={'Avere Warranty Tracker'}
          items={WarrantyTrackerAvereDashItems}
        />
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default Tables;
