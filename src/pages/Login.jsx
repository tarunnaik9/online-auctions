import { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Signup logic
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setMessage("Please fill in all fields.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      // Simulate successful signup
      setMessage("Signup successful ✅");
      console.log("User signed up:", formData);
    } else {
      // Login logic
      if (!formData.email || !formData.password) {
        setMessage("Please enter email and password.");
        return;
      }

      // Simulate successful login
      setMessage("Login successful ✅");
      console.log("User logged in:", formData);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <Container className="mt-5">
      <div className="form-box">
        <h2 className="text-center">{isSignUp ? "Sign Up" : "Sign In"}</h2>

        {message && <Alert variant="info">{message}</Alert>}

        <Form className="mt-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="custom-input"
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="custom-input"
            />
          </Form.Group>

          {isSignUp && (
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="custom-input"
              />
            </Form.Group>
          )}

          <Row className="justify-content-center">
            <Col xs="auto">
              <Button variant="primary" type="submit" className="submit-btn">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </Col>
          </Row>
        </Form>

        <p className="mt-3 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Button
            variant="link"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setMessage("");
            }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </p>
      </div>
    </Container>
  );
};

export default Login;

