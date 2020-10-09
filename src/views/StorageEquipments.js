import React from 'react';
// react plugin used to create charts
// import { Line, Bar } from 'react-chartjs-2';
import DoughnutChart from '../components/Chart/DoughnutChart';
import MultilineChart from '../components/Chart/MultiLineChart';
import BarChart from '../components/Chart/BarChart';

import LineChart from '../components/Chart/LineChart';

// reactstrap components
import { Row, Col, Card, CardBody } from 'reactstrap';

//charts data
import {
  chartByBU,
  chartByDC,
  chartByModel,
  chartIsilon,
  chartAvere,
  chartMapr,
  chartSystems,
  chartAvereSystems,
  chartMailpods,
  chartQA
} from '../assets/data/charts/';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: 'data1'
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <h1 className="title text-center">Storage Equipments</h1>
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
                    Storage Assets Managed by Infrastructure Services Storage
                    Team
                  </h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <MultilineChart
                data={chartSystems}
                options={chartSystems.options}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <LineChart
                data={chartAvereSystems.data}
                options={chartAvereSystems.options}
              />
            </Col>
            <Col lg="4">
              <BarChart
                data={chartMailpods.data}
                options={chartMailpods.options}
              />
            </Col>
            <Col lg="4">
              <LineChart data={chartQA.data} options={chartQA.options} />
            </Col>
          </Row>
          <Row>
            {[
              chartByBU,
              chartByDC,
              chartByModel,
              chartIsilon,
              chartAvere,
              chartMapr
            ].map((chart, i) => (
              <Col key={i} xs="12" sm="6" md="4">
                <DoughnutChart
                  title={chart.options.name}
                  data={chart.data}
                  options={chart.options}
                ></DoughnutChart>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
