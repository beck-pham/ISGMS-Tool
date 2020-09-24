import React from 'react';
import { ReactComponent as Feature1Icon } from 'assets/icon/feature-1.svg';
import { ReactComponent as Feature2Icon } from 'assets/icon/feature-2.svg';
import { ReactComponent as Feature3Icon } from 'assets/icon/feature-3.svg';
import { ReactComponent as Feature4Icon } from 'assets/icon/feature-4.svg';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
  Row,
  Col
} from 'reactstrap';

import ToolKit from 'components/ToolKit/Toolkit';

const Dashboard = () => (
  <>
    <div className="content">
      <Row>
        <Col md="12">
          <Card inverse>
            <CardImg
              src={require('assets/img/datacenter.jpg')}
              alt="data center image"
            />
            <CardImgOverlay>
              <CardTitle className="dashboard-title">
                Infrastructure Service Storage Team
              </CardTitle>
              <CardText>Storage As a Service for Apple Infrastructure</CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: '1.5rem' }}>Our Mission</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="typography-line">
                <p style={{ marginBottom: '7px', fontSize: '1rem' }}>
                  Provide the best Storage experience as a Service for iCloud,
                  iCloud Mail, WWW, AMP and SWU as well as the iCloud Lab
                  environment.
                </p>
              </div>
              <ul className="list-unstyled">
                <li>Team email : isgms@group.apple.com</li>
                <li>Radar component: iCloud Mail Storage</li>
                <li>Central station Assignment Group: ISG Mail Storage</li>
                <li>Slack/Jabber chatroom: isgms</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="3">
          <Card className="card-feature">
            <CardHeader>
              <Feature1Icon
                height={50}
                width={50}
                style={{ marginBottom: '5px' }}
              />
              <CardTitle>
                <div>
                  <h3 className="card-feature-header">Data Consistency</h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <p className="paragraph">
                High Availablibty and Fault tolerance for maximum optimization
                and performance. Minimal downtime to ensure a smooth business
                environment.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="card-feature">
            <CardHeader>
              <Feature4Icon
                height={50}
                width={50}
                style={{ marginBottom: '5px' }}
              />
              <CardTitle tag="h3">
                <div>
                  <h3 className="card-feature-header">Data Protection</h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <p className="paragraph">
                Provides a wide range of data protection using techonology such
                as SnapMirror, Snapshot, SnapRestore, SyncMirror, etc.
              </p>
              {/* <div className="composition">
                <img
                  src="img/tech1.jpg"
                  alt="technology_1"
                  className="composition-photo composition-photo--p1"
                />
                <img
                  src="img/tech2.jpg"
                  alt="technology_2"
                  className="composition-photo composition-photo--p2"
                />
                <img
                  src="img/tech3.jpg"
                  alt="stechnology_3"
                  className="composition-photo composition-photo--p3"
                />
              </div> */}
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="card-feature">
            <CardHeader>
              <Feature2Icon
                height={50}
                width={50}
                style={{ marginBottom: '5px' }}
              />
              <CardTitle tag="h3">
                <div>
                  <h3 className="card-feature-header">Data Migration</h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <p className="paragraph">
                Moving data and applications across platforms to provide faster
                performance with dynamic scaling features.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="card-feature">
            <CardHeader>
              <Feature3Icon
                height={50}
                width={50}
                style={{ marginBottom: '5px' }}
              />
              <CardTitle tag="h3">
                <div>
                  <h3 className="card-feature-header">Data Management</h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <p className="paragraph">
                Organize the data in user and system files and volumes for both
                SAN and NAS environment.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <ToolKit />
        </Col>
      </Row>
    </div>
  </>
);

export default Dashboard;
