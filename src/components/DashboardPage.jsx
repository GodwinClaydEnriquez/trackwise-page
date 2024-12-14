import React from 'react';
import { Navbar, Nav, Container, Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        backgroundColor: '#00274d', // Dark blue background for the entire page
        minHeight: '100vh', // Ensure it covers the full viewport height
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>RFID Attendance Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link as={Link} to="/id-registration">ID Registration</Nav.Link>
              <Nav.Link as={Link} to="/add-rooms">Adding Rooms</Nav.Link>
              <Nav.Link as={Link} to="/access-controls">Access Controls</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4" style={{ backgroundColor: '#00274d', color: 'white', padding: '20px', borderRadius: '5px' }}>
        <h2 className="text-center mb-4">Attendance Overview</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Time In</th>
              <th>Time Out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Student</td>
              <td>8:00 AM</td>
              <td>12:00 PM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>Instructor</td>
              <td>9:00 AM</td>
              <td>3:00 PM</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DashboardPage;