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
          Use the text editors to write markdown and the code editors to write
          code! You can add as many editors as you need, change the order of the
          editors, or delete if you choose.
        </h2>
        <h2 className="subtitle is-3">
          You can also import CSS packages and/or packages from NPM!
        </h2>
        <h2 className="subtitle is-3">
          Use the built in "show" function to quickly render React Components!
        </h2>
        <h2 className="title is-1">Enjoy!</h2>
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
