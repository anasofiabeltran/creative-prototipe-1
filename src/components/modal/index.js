import './modalCss.css';

export const Modal = ({children, isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && `is-open`}`}>
    <div className='modal-container'>
        <button onClick={closeModal} className='modal-close'>
            x
        </button>
        {children}
    </div>
    </article>
  )
}
