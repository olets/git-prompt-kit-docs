const FORM = document.querySelector('form')
const INITIALIZED_CLASS = 'initialized'
const PROMPT = document.getElementById('prompt')

class Form {
  constructor(el) {
    this.inputs = [...el.querySelectorAll('input')]

  	this.inputs.filter(input => input.checked).forEach(input => {
  		PROMPT.classList.add(input.id)
  	})

  	PROMPT.classList.add(INITIALIZED_CLASS)

  	this.inputs.forEach(input => addEventListener('change', this.handleChange))
  }

  handleChange = e => {
    const key = e.target.id
    PROMPT.classList.toggle(key)
  }
}

new Form(FORM)
