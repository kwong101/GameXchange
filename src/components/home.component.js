import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class Home extends Component {

    render() {
      return (
        <div>
          <Container fluid>
            <Row sm= {1}>

                <Col xs="auto">
                    <center>  
                      <h1>
                          GameXchange
                      </h1>
                    </center>
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
                              Board Games
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
                              Puzzles
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
                              Card Games
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