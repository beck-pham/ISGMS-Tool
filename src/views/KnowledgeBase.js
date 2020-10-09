import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button
} from 'reactstrap';

class KnowledgeBase extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <h1 className="title text-center">KnowledgeBase</h1>
              <Card className="card-plain">
                <CardBody>
                  <h4 className="text-center">
                    Search our troubleshooting topic or browse by product
                    caterogy
                  </h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <form action="#" className="search text-center">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search a bug"
                />
                <button
                  type="submit"
                  id="search-button"
                  className="btn btn-link"
                >
                  <i className="fas fa-search fa-2x search-icon"></i>
                </button>
              </form>
            </Col>
          </Row>
          <Row className="mt-5 pt-5 text-center">
            <Col sm="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">DOCUMENTATION</CardTitle>
                </CardHeader>
                <i className="fas fa-file-alt fa-5x py-3"></i>
                <CardBody>
                  <p>
                    Browses Through Our Documentation For Break-fix And
                    Troubleshooting
                  </p>
                </CardBody>
                <Button
                  className="m-5 search-knowledge-button"
                  onClick={() =>
                    window.open('https://connectme.apple.com/docs/DOC-1699692')
                  }
                >
                  Click Here
                </Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">SEARCH A BUG</CardTitle>
                </CardHeader>
                <i className="fas fa-bug fa-5x py-3"></i>

                <CardBody>
                  <p>
                    Search For A Known Bug Or Issue Or Create A New Unknown Bug
                  </p>
                </CardBody>
                <Button
                  className="m-5 search-knowledge-button"
                  onClick={() =>
                    window.open(
                      'https://mr11p00im-storagedbm.storage.me.com/knowledge_base/'
                    )
                  }
                >
                  Click Here
                </Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">SUPPORT TEAM</CardTitle>
                </CardHeader>
                <i className="fas fa-question-circle fa-5x py-3"></i>
                <CardBody>
                  <p>
                    Connect With Us If You Have Any Questions For Bugs Related
                  </p>
                </CardBody>
                <Button
                  className="m-5 search-knowledge-button"
                  onClick={() =>
                    (window.location.href = `mailto:isgms@apple.com`)
                  }
                >
                  Click Here
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default KnowledgeBase;
