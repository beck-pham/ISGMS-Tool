import React from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Label
} from 'reactstrap';

import {
    iTicketSelectGroups,
    iTicketInputGroups,
    defaultDescription
} from './iTicketData';

const TicketForm = () => {
    return (
        <Card className='card-plain px-md-5'>
            <CardHeader>
                <h2 className='title text-center'>iTicket Form</h2>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row className='px-md-5'>
                        <Col sm='6'>
                            {iTicketSelectGroups &&
                                iTicketSelectGroups.map((group) => (
                                    <FormGroup>
                                        <Label>{group.label}</Label>
                                        <Input
                                            type={group.type}
                                            name={group.name}
                                            id={group.name}
                                        >
                                            <option className='text-muted'>
                                                Select {group.label}
                                            </option>
                                            {group.options &&
                                                group.options.map((option) => (
                                                    <option>{option}</option>
                                                ))}
                                        </Input>
                                    </FormGroup>
                                ))}
                        </Col>
                        <Col sm='6'>
                            {iTicketInputGroups &&
                                iTicketInputGroups.map((group) => (
                                    <FormGroup>
                                        <Label>{group.label}</Label>
                                        <Input
                                            type={group.type}
                                            name={group.name}
                                            id={group.name}
                                            placeholder={group.placeholder}
                                        />
                                    </FormGroup>
                                ))}
                        </Col>
                    </Row>
                    <Row className='px-md-5'>
                        <Col xs='12'>
                            <FormGroup>
                                <label>Description</label>
                                <Input
                                    style={{
                                        resize: 'vertical',
                                        maxHeight: '400px'
                                    }}
                                    cols='80'
                                    defaultValue={defaultDescription}
                                    placeholder='Here can be your description'
                                    rows='20'
                                    type='textarea'
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
            <CardFooter className='mx-auto'>
                <Button className='btn-fill' color='primary' type='submit'>
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TicketForm;
