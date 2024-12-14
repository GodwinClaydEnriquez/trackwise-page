import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const IDRegistrationPage = () => {
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [edpCode, setEdpCode] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegisterID = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages

    console.log('Submitting data:', { idNumber, fullName, role, edpCode, subjectName }); // Log the data

    try {
      const response = await axios.post('http://localhost:3000/api/id-registration', {
        idNumber,
        fullName,
        role,
        edpCode,
        subjectName,
      });

      setSuccess('ID Registration successful!');
      setTimeout(() => {
        navigate('/dashboard'); // Redirect to dashboard after a short delay
      }, 2000);
    } catch (err) {
      console.error('Error during ID registration:', err); // Log the error for debugging
      setError(err.response?.data?.message || 'ID Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: '#00274d', // Dark blue background for the outer container
        color: 'white',
        margin: 0,
        padding: 0,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Container className="w-100">
        <Row>
          <Col xs={12} sm={10} md={8} lg={6} xl={4} className="mx-auto">
            <div
              className="p-4 shadow rounded"
              style={{ backgroundColor: 'white', color: 'black' }} // Set background to white
            >
              <h1 className="text-center mb-4">ID Registration</h1>
              {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
              {success && <div className="alert alert-success">{success}</div>} {/* Display success message */}
              <Form onSubmit={handleRegisterID}>
                <Form.Group className="mb-3" controlId="formIDNumber">
                  <Form.Label>ID Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter ID Number"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEDPCode">
                  <Form.Label>EDP Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter EDP Code"
                    value={edpCode}
                    onChange={(e) => setEdpCode(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubjectName">
                  <Form.Label>Subject Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subject Name"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register ID
                </Button>
              </Form>
              <Button 
                variant="secondary" 
                onClick={() => navigate('/dashboard')} 
                className="w-100 mt-3"
              >
                Back to Dashboard
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IDRegistrationPage;