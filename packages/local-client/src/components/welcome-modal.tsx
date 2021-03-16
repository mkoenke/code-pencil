import './welcome-modal.css'

const WelcomeModal: React.FC = () => {
  const closeModal = (event: any) => {
    event.target.closest('#modal').classList.remove('is-active')
  }

  return (
    <div id="modal" className="modal is-active ">
      <div onClick={closeModal} className="modal-background"></div>
      <div className="modal-content box">
        <h1 className="title is-1">Welcome to Code-Pencil</h1>
        <h2 className="subtitle is-3">
          Write some markdown... Write some code...
        </h2>
        <h2 className="subtitle is-3">Import some packages...</h2>
        <h2 className="subtitle is-3">Import some css...</h2>
        <h2 className="subtitle is-3">
          Use the built in "show" function to render React Components!
        </h2>
      </div>
      <button
        onClick={closeModal}
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  )
}

export default WelcomeModal
