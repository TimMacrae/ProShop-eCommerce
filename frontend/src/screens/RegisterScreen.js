import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../actions/userActions";

export default function RegisterScreen({ history }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { userInfo, loading, error } = userState;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      setName("");
      setEmail("");
      setPassword("");
      history.push("/");
    }
  }, [userInfo, history]);

  //ON SUBMIT FORM ACTION
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerAction(name, email, password));
  };
  return (
    <FormContainer>
      <h1>Register Now</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="r-name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="usrname"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="r-email">
          <Form.Label>Email Adresse</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="r-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="dark">
          Register now
        </Button>
      </Form>
      <Row className="py-4">
        <Col>
          You already have an account <Link to="/login">Go to login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
