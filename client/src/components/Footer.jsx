import React from 'react';
import { Card } from 'react-bootstrap';

function Footer() {
    return (
        <Card id="footer">
            <Card.Body>
                <Card.Title>
                    Menu Text App
                </Card.Title>
                <Card.Text>
                    Footer content
                </Card.Text>
            </Card.Body>
            <Card.Footer>@2020 Copyright</Card.Footer>
        </Card>
    );
}

export default Footer;