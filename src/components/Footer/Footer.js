/*eslint-disable*/
import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container className="mx-3" fluid>
          <Nav>
            <Row>
              <NavItem>
                <NavLink href="#">
                  <i className="fab fa-facebook-square fa-lg"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="fas fa-envelope fa-lg"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="fab fa-slack-hash fa-lg"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="far fa-comments fa-lg"></i>
                </NavLink>
              </NavItem>
            </Row>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} Infrastructure Services Storage Team
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
