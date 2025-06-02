import React from 'react';
import { Card, Button } from 'react-bootstrap';

function About() {
  return (
    <div id="about" className="my-4">
      <h2 className="text-secondary mb-3">ℹ️ ABOUT PROJECT</h2>

      <Card className="p-4 shadow-sm">
        <Card.Text>
          Welcome to <strong>NammaBank</strong>, your one-stop solution for decentralized crypto banking.
          Our mission is to simplify blockchain access for everyone — from trading to KYC to secure wallets.
        </Card.Text>

        <Card.Text>
          ✅ Powered by Blockchain <br />
          ✅ Govt-approved license process <br />
          ✅ Referral and Earning system <br />
          ✅ Transparent transactions & history
        </Card.Text>

        <Button
          variant="secondary"
          href="/whitepaper.pdf"
          target="_blank"
          download
          className="mb-3"
        >
          📄 Download Whitepaper
        </Button>

        <Card.Text>
          📞 <strong>Contact Us:</strong><br />
          Email: chandrasekarcse321@gmail.com<br />
          Phone: +91 6383924993<br />
          Address: 5/46-5 2 Floor, Crypto Tower, salem - 636308
        </Card.Text>
      </Card>
    </div>
  );
}

export default About;
