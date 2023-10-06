import React from "react";
import UserContext from "../context/userContext";
import User from "../context/user";
import { Card, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");


  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      setShowErrorModal(true);
      return;
    }
    if (!validate(balance, "balance")) return;

    const newUser = {
      name: name,
      email: email,
      password: password,
      balance: balance,
      transactionHistory: [],
    };

    User.push(newUser);

    // Mostrar mensaje de éxito
    setSuccessMessage("Account created successfully!");
    setShowSuccessModal(true);

    // Restablecer valores
    setName("");
    setEmail("");
    setPassword("");
    setBalance("");
  }

  function clearForm() {
    setShow(true);
  }

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="mt-5">
          <Card.Header
            style={{ backgroundColor: "rgb(186, 31, 46)" }}
            as="h5"
            className="bg- text-white"
          >
            Create Account
          </Card.Header>
          <Card.Body>
            {show ? (
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="balance">
                  <Form.Label>First deposit</Form.Label>
                  <Form.Control
                    type="balance"
                    placeholder="Enter deposit"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: "rgb(186, 31, 46)",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  variant="light"
                  onClick={handleCreate}
                  className="btn-block"
                  disabled={!name && !email && !password && !balance}
                >
                  Create
                </Button>
              </Form>
            ) : (
              <>
                <h5>Success</h5>
                
              </>
            )}
          </Card.Body>
          {status && (
            <Card.Footer className="text-danger text-center">{status}</Card.Footer>
          )}
        </Card>
      </Col>
      
      {/* Modal de error de contraseña */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Password must be at least 8 characters long</Modal.Title>
        </Modal.Header>
      <Modal.Body>{passwordError}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
         Close
        </Button>
      </Modal.Footer>
      </Modal>



      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowSuccessModal(false)}
          >
            Add another account
          </Button>
        </Modal.Footer>
      </Modal>

      
    </Row>
  );
}

export default CreateAccount;
