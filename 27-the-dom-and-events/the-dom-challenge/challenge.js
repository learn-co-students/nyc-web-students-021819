document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('comment-form')

  const submitButton = document.getElementById('submit')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('I am clicked')
  })
  // console.log('we are here')
  // console.dir(form)
})
