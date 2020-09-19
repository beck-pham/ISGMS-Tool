import React from 'react';

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardText } from 'reactstrap';

const MemberCard = ({ image, name, position, description }) => {
    return (
        <>
            <Card className='card-user'>
                <CardBody>
                    <CardText />
                    <div className='author'>
                        <div className='block block-one' />
                        <div className='block block-two' />
                        <div className='block block-three' />
                        <div className='block block-four' />
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                            <img alt='...' className='avatar' src={image} />
                            <h5 className='title'>{name}</h5>
                        </a>
                        <p className='description'>{position}</p>
                    </div>
                    <div className='card-description'>{description}</div>
                </CardBody>
                <CardFooter>
                    <div className='button-container'>
                        <Button className='btn-icon btn-round' color='facebook'>
                            <i className='fab fa-facebook' />
                        </Button>
                        <Button className='btn-icon btn-round' color='twitter'>
                            <i className='fab fa-twitter' />
                        </Button>
                        <Button className='btn-icon btn-round' color='google'>
                            <i className='fab fa-google-plus' />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
};

export default MemberCard;
