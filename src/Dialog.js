import React, { useEffect } from "react";
import './Dialog.css';

const Dialog = ({ isModal = true, isOpen, onClose, children }) => {
  // to prevent body scroll when the dialg is open
  const prevenBodyScroll = (preventScroll) => {
    document.body.style.overflow = preventScroll ? "hidden" : "auto";
  };

  useEffect(() => {
    if (isModal && isOpen) {
      prevenBodyScroll(true);
    } else {
      prevenBodyScroll(false);
    }
    return () => prevenBodyScroll(false);
  }, [isOpen, isModal]);

  if (!isOpen) return null;

  return (
    <div className={`dialog-overlay ${isModal ? 'modal' : ''}`}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <button className="dialog-close-btn" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
