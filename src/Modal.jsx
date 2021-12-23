import { useEffect } from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');

const Modal = ({ children }) => {
  const el = document.createElement('div');
  el.classList.add('modal');
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Modal;
