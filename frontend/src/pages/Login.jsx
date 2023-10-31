import React, { useState, useContext } from 'react'
import { Button, Form, Row, Col, Stack } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastSuccess, toastfailure } from "../utils/ToastMessages";
import { loginRoutes } from '../utils/services';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {setTokenInfo} = useContext(AuthContext)

  const dataValidation = () => {
    if (!email || !password) {
      toast.error("All Fields are Mandatory", toastfailure);
    } else if (!email.includes("@")) {
      toast.error("@ is Mandatory", toastfailure);
    }
    return true;
  };

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(dataValidation()){
      const respo = await axios.post(loginRoutes, {
        email,
        password
      })
      if(respo.data.status === false){
        toast.error(respo.data.message, toastfailure)
      }
      if(respo.data.status === true){
        setEmail("")
        setPassword("")
        toast.success(respo.data.message, toastSuccess)
        setTimeout(()=>{
          navigate("/chat")
          setTokenInfo(respo.data.user)
          localStorage.setItem("userInfo",respo.data.userExist.name)
          localStorage.setItem("user", respo.data.user)
        },3000)
      }
    }
  }


  return (
    <>
    <ToastContainer/>
      <Form onSubmit={handleSubmit}>
        <Row style={{
          height : "100vh",
          justifyContent : "center",
          paddingTop: "100px"
        }}>
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control type="email" placeholder="Enter your email" onChange={handleEmail} value={email}/>
              <Form.Control type="password" placeholder="Enter your password" onChange={handlePassword} value={password}/>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login