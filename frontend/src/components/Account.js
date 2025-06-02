import React from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

function Account() {
  return (
    <div id="account" className="my-4">
      <h2 className="text-warning mb-3">📋 ACCOUNT / KYC</h2>
      <Card className="p-4 shadow-sm">
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="aadhar">
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Aadhar number" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="pan">
                <Form.Label>PAN Number</Form.Label>
                <Form.Control type="text" placeholder="Enter PAN number" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your address" />
          </Form.Group>

          <Button variant="warning" type="submit">
            Submit KYC
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Account;
