const FORM = document.querySelector('form')
const PROMPT = document.querySelector('#prompt')

class Form {
  constructor(el) {
    this.inputs = el.querySelectorAll('input')
    this.inputs.forEach(input => addEventListener('change', this.handleChange))
  }

  handleChange = e => {
    const key = e.target.id
    PROMPT.classList.toggle(key)
  }
}

new Form(FORM)
