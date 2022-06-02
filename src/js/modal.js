const getElements = () => {
  const modal = document.getElementById('modal')
  const openModalBtn = document.querySelectorAll('.buy-now')
  const sendBtn = document.querySelector('.modal-block__send-btn')
  const form = document.getElementById('form')
  const userName = document.querySelector('.user-name')
  const email = document.querySelector('.email')
  const letPLans = document.querySelectorAll('.modal-block__plan')
  const loading = document.querySelector('.loading-block')
  const checkboxes = document.querySelectorAll('.input-checkboxes')
  const checkboxesName = document.querySelectorAll('.input-checkboxes__name')
  const checkboxesError = document.querySelector('.checkbox')
  const radioInputs = document.getElementsByName('radio-inputs')
  const radio = document.querySelectorAll('.modal-block__plan')
  return {
    modal,
    openModalBtn,
    sendBtn,
    form,
    userName,
    email,
    letPLans,
    loading,
    checkboxes,
    checkboxesName,
    checkboxesError,
    radioInputs,
    radio,
  }
}
export const renderModal = (DATA) => {
  // When the user clicks on the button =>
  const elements = getElements()

  let activeRadioLabels = ''

  const setActiveRadio = (element) => {
    elements.radioInputs.forEach((a) => {
      activeRadioLabels = a.nextElementSibling.textContent
      if (a.dataset.radio == element.dataset.btnRadio) {
        a.checked = true
      }
    })
  }

  const openModal = (element) => {
    setActiveRadio(element)
    elements.modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    elements.modal.style.display = 'none'
    document.body.style.overflow = 'scroll'
  }

  document.querySelector('.close-icon').addEventListener('click', closeModal)

  elements.openModalBtn.forEach((item) =>
    item.addEventListener('click', () => openModal(item))
  )

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == elements.modal) closeModal()
  }

  // adding action for send button

  elements.letPLans.forEach(
    (plan, index) => (plan.textContent = DATA.plans[index].name)
  )

  elements.radio.forEach((item) => {
    item.addEventListener('click', () => (activeRadioLabels = item.textContent))
  })
  const activeCheckboxesText = () => {
    let texts = []
    elements.checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked === true) {
        texts.push(elements.checkboxesName[index].textContent)
      }
    })
    return texts
  }

  const sendToBack = (e) => {
    e.preventDefault()
    const formData = validateInputs()
    if (formData) {
      elements.loading.classList.remove('dn')
      setTimeout(() => {
        closeModal()
        elements.loading.classList.add('dn')
      }, 2000)
      console.log(formData)
    }
  }

  const validateInputs = () => {
    const userNameValue = elements.userName.value.trim()
    const emailValue = elements.email.value.trim()
    const checkboxText = activeCheckboxesText()
    // check up for name
    if (userNameValue === '') setError(elements.userName, 'required field')
    else if (userNameValue.length < 3)
      setError(elements.userName, 'should be more then 3 symbols')
    else setSuccess(elements.userName)

    // check up for email
    if (emailValue === '') setError(elements.email, 'required field')
    else if (!isValidEmail(emailValue))
      setError(elements.email, 'Provide a valid email')
    else setSuccess(elements.email)

    // check up for checkboxes
    if (checkboxText.length === 0)
      return setError(elements.checkboxesError, 'required field')
    else setSuccess(elements.checkboxesError)

    return {
      name: userNameValue,
      email: emailValue,
      plan: activeRadioLabels.trim(),
      social: checkboxText,
    }
  }

  const setSuccess = (element) => {
    const inputParent = element.parentElement
    const errorDisplay = inputParent.querySelector('.error')
    const errorInput = inputParent.querySelector('.modal-block__inputs')

    errorDisplay.textContent = ''
    inputParent.classList.remove('error')
    if (errorInput !== null) errorInput.style.background = '#f2f2f2'
  }

  const setError = (element, message) => {
    const inputParent = element.parentElement
    const errorDisplay = inputParent.querySelector('.error')
    const errorInput = inputParent.querySelector('.modal-block__inputs')

    errorDisplay.textContent = message
    inputParent.classList.add('error')
    if (errorInput !== null) errorInput.style.background = '#ffeeee'
  }

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  elements.form.addEventListener('submit', sendToBack)
  elements.sendBtn.addEventListener('click', sendToBack)
  elements.userName.addEventListener('input', validateInputs)
  elements.email.addEventListener('input', validateInputs)
  elements.checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('input', validateInputs)
  )
}
