import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Load saved credentials from local storage if they exist
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      // If login is successful, you can store the token or user info
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in local storage

      // Save credentials if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        // If "Remember Me" is not checked, clear the credentials
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError('Invalid credentials. Please try again.'); // Set error message
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
              <h1 className="text-center mb-4">RFID Attendance Tracker</h1>
              {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
              <Form onSubmit={handleLogin}>
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

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="Remember Me" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link to="/register">Create an account</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;