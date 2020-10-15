import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class AboutUs extends Component {

    render() {
        return (
          <div>         

            <Container>
                <Row sm= {1}>
                    <Col md={8}>
                        <img src="https://source.unsplash.com/440x300/?boardgame" alt="Puzzle or board game."></img>
                    </Col>
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
                    <Col sm={12}>
                        <h3>
                            How it works
                        </h3>
                    </Col>
                </Row>
                <Row xs={1}>
                    <Col sm>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed dictum ipsum eu metus dapibus vestibulum.</Col>
                    <Col sm>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed dictum ipsum eu metus dapibus vestibulum.</Col>
                    <Col sm>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed dictum ipsum eu metus dapibus vestibulum.</Col>
                </Row>
            </Container>
        
        </div>
        )
      }
}