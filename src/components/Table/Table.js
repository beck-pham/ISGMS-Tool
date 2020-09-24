import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap';

const SystemInfoTable = ({ data, columns }) => {
  return (
    <>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="text-center">
              <CardTitle tag="h2">System Info Table</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    {columns && columns.map(column => <th>{column.Header}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map(item => (
                      <tr>
                        {item &&
                          Object.values(item).map(value => <td>{value}</td>)}
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SystemInfoTable;
