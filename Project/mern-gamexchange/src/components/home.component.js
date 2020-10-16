import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class Home extends Component {

    render() {
      return (
        <div>
          <Container fluid>
            <Row sm= {1}>

                <Col md={4}>
                    <h1>
                        GameXchange
                    </h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed dictum ipsum eu metus dapibus vestibulum. 
                    Donec eget lorem vitae velit tincidunt volutpat. 
                    Nunc tristique ligula quis dolor molestie pretium. 
                    Quisque a suscipit ante, in mattis justo.
                </Col> 
            </Row>
     
            
            <Row sm={1} md={3}>
                <Col sm>
                    <Card stepone = "text-c" style={{ width: '250px', Height: 'auto' }} >
                    <Card.Img variant="App store." src="https://source.unsplash.com/250x250/daily/?appstore" />
                        <Card.Body>
                          {/* 
                            FIXME: used <center> again
                          */}
                          <center>
                            <Card.Title>
                              Do Something...
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm>
                  <Card style={{ width: '250px', Height: 'auto' }}>
                    <Card.Img variant="Person running." src="https://source.unsplash.com/250x250/daily/?running"/>
                        <Card.Body>
                          {/* 
                            FIXME: used <center> again
                          */}
                          <center>
                            <Card.Title>
                              ...Then do this...
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>

                <Col sm >
                  <Card style={{ width: '250px', Height: 'auto' }}>
                    <Card.Img variant="Confetti." src="https://source.unsplash.com/250x250/daily/?confetti" />
                        <Card.Body>
                          <center>
                            <Card.Title>
                              ... Then it's fun!
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Container>
        </div>
      )
    }
}