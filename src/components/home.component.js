import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class Home extends Component {

    render() {
      return (
        <div>
          <Container fluid>
          <center>  
                      <h1>
                          GameXchange
                      </h1>
                    </center>
                    <br />
                    <br />
                    <br />

                    <Row>
                <Col sm>
                    {/* 
                      FIXME: should i be using center like this? isn't it bad
                      practice to style using html? 
                    */}

                </Col>
            </Row>
            
            <Row sm >
                <Col sm className="outer-steps inner-steps">
                  <center>
                  <Card stepone = "text-c" style={{ width: '250px', Height: 'auto' }} >
                    <Card.Img variant="Browse" src="https://source.unsplash.com/20WoowHnS5k/250x250/" />
                        <Card.Body>
                          {/* 
                            FIXME: used <center> again
                          */}
                          <center>
                            <Card.Title>
                              Browse Board Games
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </center>
                </Col>

                <Col sm  className="outer-steps inner-steps middle-card-about">
                  <center>
                  <Card style={{ width: '250px', Height: 'auto'}} >
                    <Card.Img variant="" src="https://source.unsplash.com/VpL2pCBfvhU/250x250/" />
                        <Card.Body>
                          {/* 
                            FIXME: used <center> again
                            FIXME: This is so bad
                          */}
                          <center>
                            <Card.Title>
                              Browse Puzzles
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </center>
                  </Col>

                <Col sm  className="outer-steps inner-steps">
                  <center>
                  <Card style={{ width: '250px', Height: 'auto' }}>
                    <Card.Img variant="People exchanging a box." src="https://source.unsplash.com/BFdSCxmqvYc/250x250/" />
                        <Card.Body>
                          <center>
                            <Card.Title>
                              Browse Card Games
                            </Card.Title>
                          </center>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dictum ipsum eu metus dapibus vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </center>
                </Col>
            </Row>
          </Container>
        </div>
      )
    }
}