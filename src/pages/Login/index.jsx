import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./styles.scss";
import Navbar from "../../components/navbar";
export default function Login() {
  return (
    <div>
      <Navbar/>
      <div className="loginContainer">
        <h2>Đăng Nhập</h2>
        <Form className="form">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="7">
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="7">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <Button className="d-flex justify-content-between" variant="primary">
          Đăng nhập
        </Button>{" "}
      </div>
    </div>
  );
}
