import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function Exchange() {
  return (
    <div>
      <h2 className="mb-4 text-center">💱 Currency Exchange</h2>

      <Card className="p-4 shadow-sm">
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="fromCurrency">
                <Form.Label>From Currency</Form.Label>
                <Form.Select>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="toCurrency">
                <Form.Label>To Currency</Form.Label>
                <Form.Select>
                  <option value="USD">USD - US Dollar</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="EUR">EUR - Euro</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter amount" />
              </Form.Group>
            </Col>

            <Col md={6} className="d-flex align-items-end">
              <Button variant="primary" type="submit" className="w-100">
                Convert Now
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default Exchange;
