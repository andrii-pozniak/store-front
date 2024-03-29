import { ModalContent, ModalBackdrop, BtnClose } from './Modal.Style';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const modalRoot = document.querySelector('#modal-root');

export const ModalSample = ({ toggleModal, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const close = (e) => {
      if(e.code === 'Escape'){            
        toggleModal()
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [toggleModal]);

  useEffect(() => {
    const closeModal = e => {
      if (!modalRef.current.contains(e.target)) {
        toggleModal();       
      }
    };
    window.addEventListener('mousedown', closeModal);
    return () => window.removeEventListener('mousedown', closeModal);
  }, [toggleModal]);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>       
      <ModalContent ref={modalRef} >   
      <BtnClose type="button" onClick={toggleModal} >
          <CloseIcon />
        </BtnClose>     
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};