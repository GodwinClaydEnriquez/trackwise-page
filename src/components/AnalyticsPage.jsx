import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AnalyticsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={10} lg={8} className="mx-auto text-center">
          <h1 className="mb-4">Analytics</h1>
          <p>Here you can view attendance trends, generate reports, and visualize data.</p>
          {/* Example placeholder for charts or data visualization */}
          <div className="p-4 shadow rounded bg-white">
            <h3>Attendance Trends</h3>
            <p>Graphs and analytics data will go here.</p>
          </div>
          <Button variant="secondary" onClick={handleBack} className="mt-4">
            Back to Dashboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticsPage;
