import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./styles.scss";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
const fakeAccount = {username: "admin", password: "admin"}
export default function Login() {
  let navigate = useNavigate();
  const [username,setUserName] = useState();
  const [password,setPassword] = useState();
  
  const handleChange = (val, field) => {
      if (field === "username") {
        setUserName(val);
      }
      else {
        setPassword(val)

      }
  }
  const handleOnLogin = () => {
    if(username === fakeAccount.username && password === fakeAccount.password) {
      console.log("dang nhap thanh cong");
      navigate('/')

    }
    else {
      console.log("Dang nhap khong thanh cong");
      alert("Username or password is incorrect!!!")
    }
  }
  const handleCreate = () => {
    navigate('/Register')
  }
  return (
    <div>
      <Navbar/>
      <div className="loginContainer">
        <h2>Đăng Nhập</h2>
        <Form className="form">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Username" value={username} onChange = {(e) => handleChange(e.target.value, "username" )}/>
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
              <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => handleChange(e.target.value, "password")} />
            </Col>
          </Form.Group>
        </Form>
        <Button className="d-flex justify-content-between" variant="primary" onClick={handleOnLogin}>
          Đăng nhập
        </Button>{" "}
        <a href={handleCreate}>Tao tai khoan moi</a>
      </div>
    </div>
  );
}
