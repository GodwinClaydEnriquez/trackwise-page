import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddRoomsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle room creation goes here
    alert('Room created successfully!');
  };

  return (
    <div
      style={{
        backgroundColor: '#001f3f', // Dark blue background
        height: '100vh', // Full viewport height
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
          <Col xs={12} sm={10} md={8} lg={6} xl={4} className="mx-auto">
            <div className="p-4 shadow rounded bg-white">
              <h1 className="text-center mb-4">Add Room</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formRoomName">
                  <Form.Label>Room Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter room name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRoomNumber">
                  <Form.Label>Room Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter room number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEDPCode">
                  <Form.Label>EDP Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter EDP Code" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSchedule">
                  <Form.Label>Schedule</Form.Label>
                  <Form.Control type="text" placeholder="Enter schedule" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Add Room
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

export default AddRoomsPage;