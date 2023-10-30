import React, { useState, useContext } from "react";
import { Button, Form, Row, Col, Stack } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastSuccess, toastfailure } from "../utils/ToastMessages";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"
import { registerRoute } from "../utils/services";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { registerInfo, setRegisterInfo } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const dataValidation = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All Fields are Mandatory", toastfailure);
    } else if (!email.includes("@")) {
      toast.error("@ is Mandatory", toastfailure);
    } else if (name.length <= 3) {
      toast.error("Name should be more than 3 characters", toastfailure);
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be same", toastfailure);
    } else if (password.length < 8 && confirmPassword.length < 8) {
      toast.error(
        "Password and Confirm Password should be more than 8 characters",
        toastfailure
      );
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (dataValidation()) {
      const respo = await axios.post(registerRoute,{
        name,
        email,
        password
      })
      if(respo.data.status === false){
        toast.error(respo.data.message, toastfailure)
      }
      if(respo.data.status === true){
        toast.success(respo.data.message, toastSuccess)
      }
      setInterval(()=>{
        navigate('/login')
      },3000)
    }
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={handleName}
                value={name}
              />
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={handleEmail}
                value={email}
              />
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={handlePassword}
                value={password}
              />
              <Form.Control
                type="password"
                placeholder="Enter your Confirm Password"
                onChange={handleConfirmPassword}
                value={confirmPassword}
              />
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
