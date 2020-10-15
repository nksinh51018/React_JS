import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Product() {
    return (
        <>
            <Container style={{ marginTop: 50 }}>
                <Row>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/50/2c/a3/502ca33a6bcd3eafa97d50957c63dcb9.png"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/50/2c/a3/502ca33a6bcd3eafa97d50957c63dcb9.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/50/2c/a3/502ca33a6bcd3eafa97d50957c63dcb9.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
               
            </Container>
        </>
    );
}

export default Product;
