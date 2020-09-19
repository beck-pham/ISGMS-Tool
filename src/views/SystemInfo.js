import React from 'react';
import Table from '../components/Table/Table';

//data
import {
    data,
    columns,
    SystemInfoDashItems
} from '../assets/data/SystemInfoData';
import Dash from '../components/Dash/Dash';

class Tables extends React.Component {
    render() {
        return (
            <>
                <div className='content'>
                    <Dash items={SystemInfoDashItems} />
                    <Table data={data} columns={columns} />
                </div>
            </>
        );
    }
}

export default Tables;
