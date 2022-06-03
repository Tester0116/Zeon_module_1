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

export const validation = () => {
  const textInputs = document.querySelectorAll('.modal-block__inputs')
  textInputs.forEach((textInput, index) => {
    if (textInput.value === '') {
      setError(textInput, 'this filed is required*')
    } else if (textInput.value.length < 3) {
      setError(textInput, 'should be more than 3')
    } else {
      setSuccess(textInput)
    }
  })
}
