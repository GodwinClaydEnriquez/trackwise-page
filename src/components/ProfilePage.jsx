import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser ] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    const fetchUser  = async () => { // Corrected function declaration
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser (response.data); // Set user data from response
      } catch (err) {
        setError('Failed to fetch user profile. Please try again.');
      }
    };

    fetchUser (); // Call the function correctly
  }, []);

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: '#00274d', // Dark blue background for the outer container
        color: 'white',
        margin: 0,
        padding: 0,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <div
              className="p-4 shadow rounded text-center"
              style={{ backgroundColor: 'white', color: 'black' }} // Set background to white
            >
              <h1 className="mb-4">Profile</h1>
              {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
              {user ? (
                <>
                  <p><strong>Full Name:</strong> {user.fullName}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Role:</strong> {user.role || 'User  '}</p> {/* Assuming role is part of user data */}
                </>
              ) : (
                <p>Loading...</p>
              )}
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

export default ProfilePage;