const elements = {
  checkboxesName: document.querySelectorAll('.input-checkboxes__name'),
  checkboxes: document.querySelectorAll('.input-checkboxes'),
  letPLans: document.querySelectorAll('.modal-block__plan'),
  sendBtn: document.querySelector('.modal-block__send-btn'),
  radioInputs: document.getElementsByName('radio-inputs'),
  radio: document.querySelectorAll('.modal-block__plan'),
  checkboxesError: document.querySelector('.checkbox'),
  openModalBtn: document.querySelectorAll('.buy-now'),
  loading: document.querySelector('.loading-block'),
  userName: document.querySelector('.user-name'),
  email: document.querySelector('.email'),
  modal: document.getElementById('modal'),
  form: document.getElementById('form'),
}

export const modalHandler = (DATA) => {
  let activeRadioLabels = ''

  // When the user clicks on the button =>
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
  let activeCheckboxesText = () => {
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
      elements.loading.style = 'display: flex'
      setTimeout(() => {
        closeModal()
        elements.loading.style = 'display: none'
        elements.userName.value = ''
        elements.email.value = ''
        elements.checkboxes.forEach((checkbox) => (checkbox.checked = false))
      }, 2000)
      console.log(formData)
    }
  }

  const validateInputs = () => {
    let isValidName = false
    let isValidEmailValue = false
    let isValidcheckBox = false

    const userNameValue = elements.userName.value.trim()
    const emailValue = elements.email.value.trim()
    const checkboxText = activeCheckboxesText()
    // check up for name
    if (userNameValue === '') {
      setError(elements.userName, 'required field')
      isValidName = false
    } else if (userNameValue.length < 3) {
      setError(elements.userName, 'should be more then 3 symbols')
      isValidName = false
    } else {
      setSuccess(elements.userName)
      isValidName = true
    }

    // check up for email
    if (emailValue === '') {
      setError(elements.email, 'required field*')
      isValidEmailValue = false
    } else if (!isValidEmail(emailValue)) {
      setError(elements.email, 'Provide a valid email')
      isValidEmailValue = false
    } else {
      setSuccess(elements.email)
      isValidEmailValue = true
    }

    // check up for checkboxes
    if (checkboxText.length === 0) {
      setError(elements.checkboxesError, 'required field*')
      isValidcheckBox = false
    } else {
      setSuccess(elements.checkboxesError)
      isValidcheckBox = true
    }

    if (isValidName && isValidEmailValue && isValidcheckBox) {
      return {
        name: userNameValue,
        email: emailValue,
        plan: activeRadioLabels.trim(),
        social: checkboxText,
      }
    }
    return false
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
}
