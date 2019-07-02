import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container, Row, Col, Visible, Hidden,ScreenClassRender } from 'react-grid-system';

function Footer() {
    return (
        <Router>
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <ul className="footer-menu">
                                <li><a href='/'>Home</a></li>
                                <li><a href="/PostList">User List</a></li>
                                <li><a href="/Image">Grid</a></li>
                                <li><a href="/LoginForm">Login</a></li>
                                <li><a href="/Signup">Signup</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <Visible xs sm>
                                Second Col
                            </Visible>
                            <Hidden xs sm>
                                <p>Paragraph visible on extra small and small.</p>
                            </Hidden>
                        </Col>
                        <Col sm={3}>
                            <Visible xs sm>
                                Third Col
                            </Visible>
                            <Hidden xs sm>
                                <p>Paragraph visible on extra small and small.</p>
                            </Hidden>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </Router>
    )
}

export default Footer
