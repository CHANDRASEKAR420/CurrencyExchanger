// import React from 'react';
// import { Card, Row, Col } from 'react-bootstrap';

// function Wallet() {
//   const walletItems = [
//     'Account number',
//     'Value',
//     'Referral',
//     'Pakage',
//     'Buy and Sell',
//     'Wallet History',
//     'Transaction History',
//     'Payment Gateway',
//     'GST Invoice',
//   ];

//   return (
//     <div id="wallet" className="my-4">
//       <h2 className="text-primary mb-3">💼 WALLET</h2>
//       <Row>
//         {walletItems.map((item, index) => (
//           <Col md={4} key={index} className="mb-3">
//             <Card border="primary" className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>{item}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Wallet;



// import React from 'react';
// import { Card, Button, Table } from 'react-bootstrap';

// function Wallet() {
//   const balance = 2500; // 🔸 Example static balance

//   return (
//     <div>
//       <h2 className="mb-4 text-center">💼 My Wallet</h2>

//       <Card className="p-4 mb-4 shadow-sm">
//         <h4>Available Balance: ₹{balance}</h4>
//         <div className="mt-3 d-flex gap-2">
//           <Button variant="success">➕ Add Funds</Button>
//           <Button variant="danger">➖ Withdraw</Button>
//         </div>
//       </Card>

//       <Card className="p-4 shadow-sm">
//         <h5 className="mb-3">💳 Transaction History</h5>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Type</th>
//               <th>Amount</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Deposit</td>
//               <td>₹1000</td>
//               <td>2025-05-30</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Withdraw</td>
//               <td>₹500</td>
//               <td>2025-05-31</td>
//             </tr>
//           </tbody>
//         </Table>
//       </Card>
//     </div>
//   );
// }

// export default Wallet;


// src/pages/Wallet.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Wallet = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center text-success mb-4">Wallet Overview</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Account Number</Card.Title>
              <Card.Text>Your unique wallet ID for secure transactions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Value</Card.Title>
              <Card.Text>Check your current wallet balance in crypto or fiat.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Referral</Card.Title>
              <Card.Text>Invite friends to earn wallet bonuses & cashback.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Package</Card.Title>
              <Card.Text>Select from available packages for rewards & features.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Buy and Sell</Card.Title>
              <Card.Text>Direct wallet-based crypto buying & selling.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Wallet History</Card.Title>
              <Card.Text>View your complete transaction log here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Transaction History</Card.Title>
              <Card.Text>Monitor your wallet credits, debits, and transfers.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Payment Gateway</Card.Title>
              <Card.Text>Link with UPI, cards, or bank for fast transactions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">GST Invoice</Card.Title>
              <Card.Text className="text-center">Get legal invoices for all your wallet operations.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Wallet;


