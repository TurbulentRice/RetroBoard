function PopUp ({ alertTitle, subtext, alertBody }) {

  return (
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="..."></img>
        <strong class="me-auto">{alertTitle}</strong>
        <small>{subtext && subtext}</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {alertBody}
      </div>
    </div>
  )

}

export default PopUp;