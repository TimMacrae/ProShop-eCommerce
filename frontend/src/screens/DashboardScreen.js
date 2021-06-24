import React from "react";
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Dashboard from "../components/Dashboard/Dashboard";

export default function DashboardScreen() {
  return (
    <Row>
      <Col md={3}>
        <Dashboard></Dashboard>
      </Col>
      <Col md={9}></Col>
    </Row>
  );
}
