import React, { useContext, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import UserContext from "../context/userContext";

function Deposit() {
  const { user, setUser } = useContext(UserContext);
  const [depositAmount, setDepositAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleDeposit = () => {
    // Validar que el monto sea positivo
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      setErrorMessage("Invalid amount");
      setShowErrorModal(true);
      return;
    }

    // Lógica para sumar
    const newBalance = user.balance + amount;
    setUser({
      ...user,
      balance: newBalance,
      transactionHistory: [
        ...user.transactionHistory,
        { type: "deposit", amount },
      ],
    });

    // Mostrar mensaje de éxito
    setSuccessMessage(`Deposit of $${amount} was successful.`);
    setShowSuccessModal(true);

    // Restablecer valores
    setDepositAmount("");
    setErrorMessage("");
  };

  return (
    <Card className="card-background"
      style={{ minHeight: 800, width: "auto", marginInline: 20 }}
      txtcolor="white"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
    >
      <h1 style={{ justifySelf: "center" }}>Deposit</h1>
      <containerD>
        <bal>
          <h4>Your account balance:</h4>
          <br />
          <h1>$ {user.balance} </h1>
        </bal>
        <atm>
          {/* Mensaje de error */}
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}

          {/* Campo de entrada para el monto */}
          <div>
            <br />
            <br />
            <label style={{ fontSize: 30, color: "white" }}>
              Deposit Amount:
            </label>
            <br />
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>

          {/* Botón de enviar */}
          <button
            style={{
              backgroundColor: "white",
              color: "rgb(186, 31, 46)",
              borderRadius: 20,
              maxHeight: 75,
              maxWidth: 150,
              fontWeight: "bold",
            }}
            onClick={handleDeposit}
            disabled={!depositAmount}
          >
            Deposit
          </button>
        </atm>
        <pic>
          <img src="ATMcolor.png" alt="ATMart" />
        </pic>
      </containerD>

      {/* Modal de error */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowErrorModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de éxito */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default Deposit;
