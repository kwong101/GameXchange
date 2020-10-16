import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class Home extends Component {

    render() {
      return (
        <div style={{width: "auto"}}>
          <Container fluid>
            <Row>

                <Col xs>
                    <center>  
                      <h1>
                          GAMEXCHANGE
                      </h1>
                    </center>
                </Col> 
            </Row>            
            <Row xs={1} md={3}>
              <center>  
                <Col xs={8} md={12}>
                    <Card className="board_game_card" style={{ width: 'auto', margin: '10px'}} >
                      <Card.Link href="/listing">
                        <Card.Img variant="top" src="https://source.unsplash.com/250x250/?boardgame"/>
                            <Card.Body>
                              {/* 
                                FIXME: used <center> again
                              */}
                              <center>
                                <Card.Title>
                                  Board Games
                                </Card.Title>
                              </center>
                            </Card.Body>
                          </Card.Link>
                        </Card>
                  </Col>
                </center>
                <center>             
                <Col xs={8} md={12} >
                  <Card className="puzzle_card" style={{width: 'auto', margin: '10px'}}>
                    <Card.Link href="/listing">  
                      <Card.Img variant="top" src="https://source.unsplash.com/250x250/daily/?puzzle"/>
                          <Card.Body>
                            {/* 
                              FIXME: used <center> again
                            */}
                            <center>
                              <Card.Title>
                                Puzzles
                              </Card.Title>
                            </center>
                          </Card.Body>
                    </Card.Link>
                  </Card>
                </Col>
                </center>

                <center>  
                  <Col xs={8} md={12}>
                    <Card className="card_game_card" style={{ width: 'auto', margin: '10px' }}>
                      <Card.Link href="/listing">
                        <Card.Img variant="top" src="https://source.unsplash.com/250x250/daily/?cardgame" />
                            <Card.Body>
                              <center>
                                <Card.Title>
                                  Card Games
                                </Card.Title>
                              </center>
                            </Card.Body>
                      </Card.Link>
                    </Card>
                  </Col>
                </center> 
            </Row>
          </Container>
        </div>
      )
    }
}