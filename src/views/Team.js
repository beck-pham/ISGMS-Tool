import React from 'react';

// reactstrap components
import { Card, CardBody, Row, Col } from 'reactstrap';

import MemberCard from '../components/MemberCard/MemberCard';

const teamMembers = [
    {
        image: require('assets/img/Eng.jpg'),
        name: 'Eng Ky',
        position: 'Storage Manager',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    },
    {
        image: require('assets/img/Ly.jpg'),

        name: 'Ly Le',
        position: 'Storage SRE',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    },
    {
        image: require('assets/img/Andrew.jpg'),

        name: 'Andrew Vo',
        position: 'Storage SRE',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    },

    {
        image: require('assets/img/Vic.jpg'),

        name: 'Vic Le',
        position: 'Storage SRE',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    },
    {
        image: require('assets/img/Rick.jpg'),

        name: 'Rick Phung',
        position: 'Storage SRE',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    },
    {
        image: require('assets/img/Vanna.jpg'),

        name: 'Vanna Le',
        position: 'Storage SRE',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    },
    {
        image: require('assets/img/Shaun.jpg'),

        name: 'Shaun Pacada',
        position: 'Storage SRE',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin'
    }
];

class UserProfile extends React.Component {
    render() {
        return (
            <>
                <div className='content'>
                    <Row>
                        <Col md='12'>
                            <h1 className='title text-center'>About Us</h1>
                            <Card>
                                <CardBody>
                                    <h4 className='title'>OUR MISSION</h4>
                                    <div className='card-description'>
                                        Provide the best Storage experience as a
                                        Service for iCloud, iCloud Mail, WWW,
                                        AMP and SWU as well as the iCloud Lab
                                        environment.
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        {teamMembers &&
                            teamMembers.map((member) => (
                                <Col lg='3' md='4' sm='6' xs='12'>
                                    <MemberCard
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
