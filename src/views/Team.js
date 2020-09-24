import React from 'react';

// reactstrap components
import { Row, Col } from 'reactstrap';

import MemberCard from '../components/MemberCard/MemberCard';

const teamMembers = [
  {
    id: 1,
    image: require('assets/img/Eng.jpg'),
    name: 'Eng Ky',
    position: 'Storage Manager'
  },
  {
    id: 2,
    image: require('assets/img/Ly.jpg'),
    name: 'Ly Le',
    position: 'Storage SRE'
  },
  {
    id: 3,
    image: require('assets/img/Andrew.jpg'),
    name: 'Andrew Vo',
    position: 'Storage SRE'
  },

  {
    id: 4,
    image: require('assets/img/Vic.jpg'),
    name: 'Vic Le',
    position: 'Storage SRE'
  },
  {
    id: 5,
    image: require('assets/img/Rick.jpg'),
    name: 'Rick Phung',
    position: 'Storage SRE'
  },
  {
    id: 6,
    image: require('assets/img/Vanna.jpg'),
    name: 'Vanna Le',
    position: 'Storage SRE'
  },
  {
    id: 7,
    image: require('assets/img/Shaun.jpg'),
    name: 'Shaun Pacada',
    position: 'Storage SRE'
  },
  {
    id: 8,
    image: require('assets/img/Siva.jpg'),
    name: 'Siva Yerruboyina',
    position: 'Storage SRE'
  }
];

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <h1 className="title text-center">The Team</h1>
            </Col>
            {teamMembers &&
              teamMembers.map(member => (
                <Col lg="3" md="4" sm="6" xs="12">
                  <MemberCard
                    key={member.id}
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    description={member.description}
                  />
                </Col>
              ))}
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
