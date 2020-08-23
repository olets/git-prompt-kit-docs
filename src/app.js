const CHECKBOX_ATTR = 'input[type="checkbox"]'
const COLOR_ATTR = 'input[type="color"]'
const FORM = document.querySelector('form')
const INITIALIZED_CLASS = 'initialized'
const PROMPT = document.getElementById('prompt')
const RESET_ATTR = 'button[data-reset]'

class Form {
  constructor(el) {
    this.optionInputs = [...el.querySelectorAll(CHECKBOX_ATTR)]
    this.resets = [...el.querySelectorAll(RESET_ATTR)]
    this.themeInputs = [...el.querySelectorAll(COLOR_ATTR)]

  	// this.optionInputs.filter(input => input.checked).forEach(input => PROMPT.classList.add(input.id))
  	// this.themeInputs.forEach(input => document.documentElement.style.setProperty(`--${input.id}`, input.value))
  	this.applyOptions(this.optionInputs)
  	this.applyTheme(this.themeInputs)

  	PROMPT.classList.add(INITIALIZED_CLASS)

  	this.addEventListeners()
  }

  applyOptions = (inputs) => {
  	inputs.forEach(input => PROMPT.classList[`${input.checked ? 'add' : 'remove'}`](input.id))
  }

  applyTheme = (inputs) => {
  	inputs.forEach(input => {
  		document.documentElement.style.setProperty(`--${input.id}`, input.value)
	  	console.log(`--${input.id} is now ${input.value}`)
	  })
  }

  addEventListeners = () => {
  	this.optionInputs.forEach(input => input.addEventListener('change', this.handleOptionChange))
  	this.resets.forEach(reset => reset.addEventListener('click', this.handleResetClick))
  	this.themeInputs.forEach(input => input.addEventListener('change', this.handleThemeChange))
  }

  handleOptionChange = (e) => {
  	this.applyOptions([e.target])
    // PROMPT.classList.toggle(e.target.id)
  }

	handleResetClick = (e) => {
		const fieldset = e.target.closest('.fieldset')
  	const optionInputs = [...fieldset.querySelectorAll(CHECKBOX_ATTR)]
  	const themeInputs = [...fieldset.querySelectorAll(COLOR_ATTR)]
  	optionInputs.forEach(input => input.checked = input.dataset.default === 'checked')
  	themeInputs.forEach(input => input.value = input.dataset.default)

  	this.applyTheme(themeInputs)
  	this.applyOptions(optionInputs)
	}

  handleThemeChange = (e) => {
  	// document.documentElement.style.setProperty(`--${e.target.id}`, e.target.value)
  	this.applyTheme([e.target])
  }
}

new Form(FORM)
