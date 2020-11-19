import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class AboutUs extends Component {

    render() {
      return (
        <div>
          <Container fluid>
            <Row sm= {1}>
                <Col md={8}>
                  <Card className="bg-dark text-white">
                    <Card.Img src="https://source.unsplash.com/1280x720/daily/?boardgame" alt="Puzzle or board game." />
                  </Card>
                </Col>

                { /* FIXME: Small change here to test something
                <Image height='0.3rem' src="https://source.unsplash.com/1280x720/daily/?boardgame" 
                      alt="Puzzle or board game." fluid
                    />
                </Col>
                */}
                <Col md={4}>
                    <h3>
                        About us
                    </h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed dictum ipsum eu metus dapibus vestibulum. 
                    Donec eget lorem vitae velit tincidunt volutpat. 
                    Nunc tristique ligula quis dolor molestie pretium. 
                    Quisque a suscipit ante, in mattis justo.
                </Col> 
            </Row>
            <Row>
                <Col sm>
                    {/* 
                      FIXME: should i be using center like this? isn't it bad
                      practice to style using html? 
                    */}
                    <center>
                      <h3>
                          How it works
                      </h3>
                    </center>
                </Col>
            </Row>
            
            <Row sm={1} md={3}>
                <Col sm>
                    <Card stepone = "text-c" style={{ width: '250px', Height: 'auto' }} >
                    <Card.Img variant="Browse" src="https://source.unsplash.com/20WoowHnS5k/250x250/" />
                        <Card.Body>
                          {/* 
                            FIXME: used <center> again
                          */}
                          <center>
                            <Card.Title>
                              Browse
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto">
                  <Card style={{ width: '250px', Height: 'auto'}} >
                    <Card.Img variant="" src="https://source.unsplash.com/VpL2pCBfvhU/250x250/" />
                        <Card.Body>
                          {/* 
                            FIXME: used <center> again
                            FIXME: This is so bad
                          */}
                          <center>
                            <Card.Title>
                              Select
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
                    <Card.Img variant="People exchanging a box." src="https://source.unsplash.com/BFdSCxmqvYc/250x250/" />
                        <Card.Body>
                          <center>
                            <Card.Title>
                              Swap!
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