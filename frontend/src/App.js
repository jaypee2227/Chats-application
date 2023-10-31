import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import "../src/App.css"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={user ? <Chat/> : <Register />} />
            <Route path="/login" element={user ? <Chat/> : <Login/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/chat" element={user ? <Chat/> : <Login/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
