import React from 'react';
import DashboardItem from './DashboardItem';

// reactstrap components
import { Row, Col } from 'reactstrap';

// import 'assets/scss/black-dashboard-react/custom/';

const Dashboard = ({ items }) => {
    return (
        <div className='card-plain' style={{ width: '100%' }}>
            <h2 className='dashboard-heading text-center container'>
                Data Information Metric Overview
            </h2>
            <Row>
                {items.map(({ id, ...otherProps }) => (
                    <Col xs={12} sm={6} md={4}>
                        <DashboardItem key={id} {...otherProps} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Dashboard;
