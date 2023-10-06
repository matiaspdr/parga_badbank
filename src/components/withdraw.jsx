import React, { useState, useContext } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import UserContext from "../context/userContext";

function Withdraw() {
  // Obtener datos del usuario
  const { user, setUser } = useContext(UserContext);

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleWithdraw = () => {
    // Validar que el monto sea un número positivo
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0 || amount > user.balance) {
      setErrorMessage("Invalid amount");
      setShowErrorModal(true);
      return;
    }

    // Lógica para restar
    const newBalance = user.balance - amount;
    setUser({
      ...user,
      balance: newBalance,
      transactionHistory: [
        ...user.transactionHistory,
        { type: "withdraw", amount },
      ],
    });

    // Mostrar mensaje de éxito
    setSuccessMessage(`Withdrawal of $${amount} was successful.`);
    setShowSuccessModal(true);

    // Restablecer valores
    setWithdrawAmount("");
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
      <h1>Withdraw</h1>
      <containerW>
        <bal>
          <h3>Your account balance:</h3>
          <br />
          <h1>$ {user.balance} </h1>
        </bal>
        <atm>
          {/* Mensaje de error */}
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}

          {/* Mensaje de logrado */}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          {/* Campo de entrada para el monto */}
          <div>
            <br />
            <br />
            <label style={{ fontSize: 30, color: "white" }}>
              Withdraw amount:
            </label>
            <br />
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
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
            onClick={handleWithdraw}
            disabled={!withdrawAmount}
          >
            Withdraw
          </button>
        </atm>
        <pic>
          <img src="ATMcolor.png" alt="ATMart" />
        </pic>
      </containerW>

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

export default Withdraw;
