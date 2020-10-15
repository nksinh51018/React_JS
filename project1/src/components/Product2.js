import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Product2 extends Component {

    constructor(props) {
        super(props);
    }

    onClick = () => {
        console.log(this.props.name)
    }

    render() {
        return (
            <>
                <Col md="auto"
                    style={{ marginTop: 30 }}>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/50/2c/a3/502ca33a6bcd3eafa97d50957c63dcb9.png"
                        />
                        <Card.Body>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text>
                                {this.props.price}
                            </Card.Text>
                            <Button onClick={
                                this.onClick
                            } variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }


}

export default Product2;
