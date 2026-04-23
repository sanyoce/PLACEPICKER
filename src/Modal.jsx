import { createPortal } from "react-dom";
import "./index.css";
import { useRef, useState } from "react";

export function Modal({ onClose, isModalState, handleDelete }) {
  const modalRoot = document.getElementById("modal-root");
  const [timer, setTimer] = useState(5);
  const timerRef = useRef(null);

  if (isModalState && !timerRef.current) {
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          handleDelete();
          timerRef.current = null;
          setTimer(5);
        }
        return prev - 1;
      });
    }, 1000);
  }

  if (!isModalState && timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(5);
  }

  if (!isModalState) {
    return null;
  }
  return createPortal(
    <div className="modalBackground">
      <div className="modalContent">
        <div className="modalText">
          <h1>Are you sure?</h1>
          <p>Do you really want to remove this place</p>
        </div>
        <div className="modalBtns">
          <button className="modalBtn" onClick={onClose}>
            No
          </button>
          <button className="modalBtnRed" onClick={handleDelete}>
            Yes
          </button>
        </div>
        <div className="modalProgressBar">
          <div
            className="progress"
            style={{ width: `${(timer / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
