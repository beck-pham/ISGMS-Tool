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
                <NavLink
                  href="https://confluence.sd.apple.com/display/ISOSRE/Infrastructure+Services+Storage+Team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-alt fa-lg"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:isgms@apple.com">
                  <i className="fas fa-envelope fa-lg"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://app.slack.com/client/TEJ6NBG84/CHAG4R058"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-slack-hash fa-lg"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:isgms-oncall@group.apple.com">
                  <i className="far fa-newspaper fa-lg"></i>
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
