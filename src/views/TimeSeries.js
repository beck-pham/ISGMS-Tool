import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
  Button
} from 'reactstrap';

class TimeSeries extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <h1 className="title text-center">Time Series</h1>
            <Card className="card-plain">
              <CardBody style={{ textAlign: 'center' }}>
                <h4 className="card-timeseries">
                  Real time monitoring for performance by providing
                  comprehensive level metrics with powerful dashboard
                </h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg
                inverse="true"
                src={require('assets/img/datacenter.jpg')}
                alt="..."
              />
              <CardBody style={{ textAlign: 'center' }}>
                <CardTitle className="card-timeseries">Newark</CardTitle>
                <Button
                  color="info"
                  className="animation-on-hover text-center"
                  onClick={() =>
                    window.open('https://nk11p00im-gfana.storage.me.com/login')
                  }
                >
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                inverse="true"
                src={require('assets/img/datacenter.jpg')}
                alt="..."
              />
              <CardBody style={{ textAlign: 'center' }}>
                <CardTitle className="card-timeseries">PrineVille</CardTitle>
                <Button
                  color="info"
                  className="animation-on-hover text-center"
                  onClick={() =>
                    window.open('https://pv33p00im-gfana.storage.me.com/login')
                  }
                >
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                inverse="true"
                src={require('assets/img/datacenter.jpg')}
                alt="..."
              />
              <CardBody style={{ textAlign: 'center' }}>
                <CardTitle className="card-timeseries">McCarran</CardTitle>
                <Button
                  color="info"
                  className="animation-on-hover text-center"
                  onClick={() =>
                    window.open('https://mr11p00im-gfana.storage.me.com/login')
                  }
                >
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                inverse="true"
                src={require('assets/img/datacenter.jpg')}
                alt="..."
              />
              <CardBody style={{ textAlign: 'center' }}>
                <CardTitle className="card-timeseries">Startown</CardTitle>
                <Button
                  color="info"
                  className="animation-on-hover text-center"
                  onClick={() =>
                    window.open('https://st11p00im-gfana.storage.me.com/login')
                  }
                >
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                inverse="true"
                src={require('assets/img/datacenter.jpg')}
                alt="..."
              />
              <CardBody style={{ textAlign: 'center' }}>
                <CardTitle className="card-timeseries">Mesa</CardTitle>
                <Button
                  color="info"
                  className="animation-on-hover text-center"
                  onClick={() =>
                    window.open('https://ms11p00im-gfana.storage.me.com/login')
                  }
                >
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                inverse="true"
                src={require('assets/img/datacenter.jpg')}
                alt="..."
              />
              <CardBody style={{ textAlign: 'center' }}>
                <CardTitle className="card-timeseries">Mapr</CardTitle>
                <Button
                  color="info"
                  className="animation-on-hover text-center"
                  onClick={() =>
                    window.open(
                      'https://mr11p00im-storagedbm.storage.me.com/welcome.php/mapr_workload.html'
                    )
                  }
                >
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TimeSeries;

// import React from 'react';

// // reactstrap components
// import {
//   Card,
//   CardImg,
//   CardBody,
//   CardTitle,
//   Button,
//   Row,
//   Col
// } from 'reactstrap';

// const dcItems = [
//   {
//     id: 1,
//     title: 'NKDC',
//     image: require('assets/img/datacenter.jpg'),
//     linkUrl: 'https://nk11p00im-gfana.storage.me.com/login'
//   },
//   {
//     id: 2,
//     title: 'STDC',
//     image: require('assets/img/datacenter.jpg'),
//     linkUrl: 'https://st11p00im-gfana.storage.me.com/login'
//   },
//   {
//     id: 3,
//     title: 'MRDC',
//     image: require('assets/img/datacenter.jpg'),
//     linkUrl: 'https://mr11p00im-gfana.storage.me.com/login'
//   },
//   {
//     id: 4,
//     title: 'PVDC',
//     image: require('assets/img/datacenter.jpg'),
//     linkUrl: 'https://pv33p00im-gfana.storage.me.com/login'
//   },
//   {
//     id: 5,
//     title: 'MSC',
//     image: require('assets/img/datacenter.jpg'),
//     linkUrl: 'https://ms11p00im-gfana.storage.me.com/login'
//   },
//   {
//     id: 6,
//     title: 'MAPR',
//     image: require('assets/img/datacenter.jpg'),
//     linkUrl:
//       'https://mr11p00im-storagedbm.storage.me.com/welcome.php/mapr_workload.html'
//   }
// ];

// class TimeSeries extends React.Component {
//   render() {
//     return (
//       <div className="content">
//         <Row>
//           <Col md="12">
//             <h1 className="title text-center">Time Series</h1>
//             <h5 className="card category">
//               Real time monitoring for performance by providing comprehensive
//               level metrics with powerful dashboard
//             </h5>
//           </Col>
//           {dcItems &&
//             dcItems.map(dcItem => (
//               <Row>
//                 <Col lg="4">
//                   <Card class>
//                     <CardImg inverse="true" src={dcItem.image} alt="..." />
//                     <CardBody style={{ textAlign: 'center' }}>
//                       <CardTitle>{dcItem.title}</CardTitle>
//                       <Button
//                         color="info"
//                         className="animation-on-hover text-center"
//                       >
//                         Sign In
//                       </Button>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             ))}
//         </Row>
//       </div>
//     );
//   }
// }

// export default TimeSeries;
