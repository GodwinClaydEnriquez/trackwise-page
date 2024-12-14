import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AccessControlsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSave = (event) => {
    event.preventDefault();
    alert('Access policies configured successfully!');
  };

  return (
    <div
      style={{
        backgroundColor: '#00274d', // Dark blue background for the outer container
        height: '100vh', // Full viewport height
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
          <Col xs={12} sm={10} md={8} lg={6} xl={4} className="mx-auto">
            <div className="p-4 shadow rounded bg-white">
              <h1 className="text-center mb-4">Access Controls</h1>
              <Form onSubmit={handleSave}>
                <Form.Group className="mb-3" controlId="formAccessLevel">
                  <Form.Label>Access Level</Form.Label>
                  <Form.Select>
                    <option>Students</option>
                    <option>Instructors</option>
                    <option>Admins</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAccessDuration">
                  <Form.Label>Access Duration</Form.Label>
                  <Form.Control type="text" placeholder="e.g., 8:00 AM - 5:00 PM" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Save Policies
                </Button>
              </Form>
              <Button variant="secondary" onClick={handleBack} className="w-100">
                Back to Dashboard
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccessControlsPage;