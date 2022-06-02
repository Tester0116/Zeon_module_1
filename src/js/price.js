export const renderPrice = (DATA) => {
  const price_name = document.querySelectorAll('.price_name')
  const price_price = document.querySelectorAll('.price_price')
  const price_text = document.querySelectorAll('.price_text')
  const price_value = document.querySelectorAll('.price_value')

  // setting name from json
  price_name.forEach(
    (item, index) => (item.textContent = DATA.plans[index].name)
  )

  price_price.forEach((item, index) => {
    item.textContent = '$' + DATA.plans[index].price // setting price from json

    price_value.value = DATA.plans[index].name // setting value for modal active plan
  })

  // setting text from json
  price_text.forEach(
    (item, index) => (item.textContent = DATA.plans[index].text)
  )
}
