import React from 'react';

// * components

// * style
import './Modal.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaXmark } from 'react-icons/fa6';

const Modal = ({ open, setOpen, children }) => {
   return (
      <div
         className={`modal-bg ${open && 'open'}`}
         onClick={(e) => {
            [...e.target.classList].includes('modal-bg') && setOpen(false);
         }}
      >
         <div className="Modal">
            <FaXmark className="icon-close" onClick={(e) => setOpen(false)} />

            <div className="modal-content">{children}</div>
         </div>
      </div>
   );
};

export default Modal;
