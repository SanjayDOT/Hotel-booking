import React from 'react';
import { Container, Row, Col, Visible, Hidden,ScreenClassRender } from 'react-grid-system';

function Image() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={3}>
                    <Visible xs sm>
                        First Col
                    </Visible>
                    <Hidden xs sm>
                        <p>Paragraph visible on extra small and small.</p>
                    </Hidden>
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
                <Col md={3}>
                    <Visible xs sm>
                        Forth Col
                    </Visible>
                    <Hidden xs sm>
                        <p>Paragraph visible on extra small and small.</p>
                    </Hidden>
                </Col>
            </Row>
            <ScreenClassRender render={screenClass => (
                <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
                    Screen class: {screenClass}
                </p>
            )} />
        </Container>
      
    </div>
  );
}

export default Image;
