import ButtonGroup from './ButtonGroup'
import Button from './Button'
import './Modal.css'

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="modal-message">{message}</p>
        <ButtonGroup align="right">
          <Button size="medium" onClick={onClose}>취소</Button>
          <Button size="medium" onClick={onClose}>확인</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Modal
