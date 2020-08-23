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

    this.applyOptions(this.optionInputs)
    this.applyTheme(this.themeInputs)

    PROMPT.classList.add(INITIALIZED_CLASS)

    this.addEventListeners()
  }

  addEventListeners = () => {
    this.optionInputs.forEach(input => input.addEventListener('change', this.handleOptionChange))
    this.resets.forEach(reset => reset.addEventListener('click', this.handleResetClick))
    this.themeInputs.forEach(input => input.addEventListener('change', this.handleThemeChange))
  }

  applyOptions = (inputs) => {
    const fieldsets = new Set()

    inputs.forEach(input => {
      fieldsets.add(this.findFieldset(input))
      PROMPT.classList[`${input.checked ? 'add' : 'remove'}`](input.id)
    })

    fieldsets.forEach(fieldset => {
      const {optionInputs} = this.findInputs(fieldset)

      for (let input of optionInputs) {
        if (input.checked != input.hasAttribute('data-default')) {
          fieldset.querySelector(RESET_ATTR).disabled = false
          return
        }
      }

      fieldset.querySelector(RESET_ATTR).disabled = true
    })
  }

  applyTheme = (inputs) => {
    const fieldsets = new Set()

    inputs.forEach(input => {
      fieldsets.add(this.findFieldset(input))
      document.documentElement.style.setProperty(`--${input.id}`, input.value)
    })

    fieldsets.forEach(fieldset => {
      const {themeInputs} = this.findInputs(fieldset)

      for (let input of themeInputs) {
        if (input.value != input.dataset.default) {
          fieldset.querySelector(RESET_ATTR).disabled = false
          return
        }
      }

      fieldset.querySelector(RESET_ATTR).disabled = true
    })
  }

  findFieldset = (el) => {
    return el.closest('.fieldset')
  }

  findInputs = (el) => {
    return {
      optionInputs: [...el.querySelectorAll(CHECKBOX_ATTR)],
      themeInputs: [...el.querySelectorAll(COLOR_ATTR)]
    }
  }

  handleOptionChange = (e) => {
    this.applyOptions([e.target])
  }

  handleResetClick = (e) => {
    const fieldset = this.findFieldset(e.target)
    const {optionInputs, themeInputs} = this.findInputs(fieldset)
    optionInputs.forEach(input => input.checked = input.hasAttribute('data-default'))
    themeInputs.forEach(input => input.value = input.dataset.default)

    this.applyTheme(themeInputs)
    this.applyOptions(optionInputs)
  }

  handleThemeChange = (e) => {
    this.applyTheme([e.target])
  }
}

new Form(FORM)
