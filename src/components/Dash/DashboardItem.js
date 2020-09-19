import React from 'react';
import { ReactComponent as MonitorIcon } from '../../assets/icon/monitor.svg';
import CountUp from 'react-countup';
import { CardTitle } from 'reactstrap';

const DashboardItem = ({
    title,
    subtitle,
    end,
    duration,
    separator,
    decimals,
    decimal,
    suffix
}) => (
    <div className='dash-item card py-3'>
        <div className='text-center'>
            <MonitorIcon
                height={20}
                width={20}
                style={{ marginRight: '5px' }}
            />
            <CardTitle tag='h4'>{title}</CardTitle>
        </div>

        <div className='count-up text-center'>
            <CountUp
                end={end}
                duration={duration}
                separator={separator}
                decimals={decimals}
                decimal={decimal}
                suffix={suffix}
            />
        </div>
        <div className='footer-text text-center'>
            <i className='fas fa-arrow-up mr-1 text-success'></i>
            <span className='font-weight-light'>{subtitle}</span>
        </div>
    </div>
);

export default DashboardItem;
