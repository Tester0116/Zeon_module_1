export const renderTestimonials = (DATA) => {
  const testimonialsName = document.querySelectorAll('.testimonials-name')
  const testimonialsText = document.querySelectorAll('.testimonials-text')
  const testimonialsJob = document.querySelectorAll('.testimonials-job')

  // setting name from json
  testimonialsName.forEach(
    (item, index) => (item.textContent = DATA.testimonials[index].name)
  )

  // setting text from json
  testimonialsText.forEach(
    (item, index) => (item.textContent = DATA.testimonials[index].text)
  )

  // setting job from json
  testimonialsJob.forEach(
    (item, index) => (item.textContent = DATA.testimonials[index].job)
  )
}
