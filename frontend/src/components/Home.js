// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const admin = true; // This can be set based on your authentication logic
  // For example, you can check if the user is an admin from your auth context or state
  // const admin = useAuth().isAdmin; // Example of using a hook to get admin status
  return (
    <Container className="mt-4">
      {admin?<h2 className="text-center text-primary mb-4">Welcome to COiNDEXiN</h2>:<h2 className="text-center text-primary mb-4">Welcome to NammaBank</h2>}


      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Create Account</Card.Title>
              <Card.Text>Join our platform and create your crypto account easily.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Buy and Sell</Card.Title>
              <Card.Text>Trade cryptocurrencies securely with real-time pricing.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Referral Offer</Card.Title>
              <Card.Text>Invite your friends and earn rewards through our referral program.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>ISO</Card.Title>
              <Card.Text>Participate in Initial Sale Offering for new tokens.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>No.1 Platform</Card.Title>
              <Card.Text>Trusted by thousands of users across the globe.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Govt Approval No</Card.Title>
              <Card.Text>Registered under appropriate crypto compliance guidelines.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Project Based Crypto Currency</Card.Title>
              <Card.Text>Each token backed by real-world project utility.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Blockchain Technology</Card.Title>
              <Card.Text>Fully decentralized, transparent, and secure system.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
