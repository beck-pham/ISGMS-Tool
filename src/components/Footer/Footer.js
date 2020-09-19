/*eslint-disable*/
import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <Container className='mx-3' fluid>
                    <Nav>
                        <Row>
                            <NavItem>
                                <NavLink href='#'>
                                    <i class='fab fa-facebook-square fa-lg'></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#'>
                                    <i class='fas fa-envelope fa-lg'></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#'>
                                    <i class='fab fa-slack-hash fa-lg'></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#'>
                                    <i class='far fa-comments fa-lg'></i>
                                </NavLink>
                            </NavItem>
                        </Row>
                    </Nav>
                    <div className='copyright'>
                        © {new Date().getFullYear()} made with{' '}
                        <i className='tim-icons icon-heart-2' />
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
