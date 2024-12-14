import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // New state for role
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        email,
        password,
        fullName,
        role, // Include role in the registration data
      });

      // If registration is successful, you can redirect to the login page or dashboard
      setSuccess('Registration successful! You can now log in.');
      setTimeout(() => {
        navigate('/'); // Redirect to login page after a short delay
      }, 2000);
    } catch (err) {
      setError('Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#00274d', // Dark blue background
        height: '100vh', // Full viewport height
        margin: 0,
        padding: 0,
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
          <Col xs={12} sm={10} md={8} lg={6} xl={4} className="mx-auto">
            <div className="p-4 shadow rounded bg-white">
              <h1 className="text-center mb-4">Register</h1>
              {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
              {success && <div className="alert alert-success">{success}</div>} {/* Display success message */}
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Assistant">Assistant</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link to="/">Back to Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationPage;