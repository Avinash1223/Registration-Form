// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showErrorFirstNameMsg: false,
    showErrorLastNameMsg: false,
    isFormSubmitted: false,
  }

  blurFirstName = () => {
    const {firstNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({showErrorFirstNameMsg: true})
    } else {
      this.setState({showErrorFirstNameMsg: false})
    }
  }

  blurLastName = () => {
    const {lastNameInput} = this.state
    if (lastNameInput === '') {
      this.setState({showErrorLastNameMsg: true})
    } else {
      this.setState({showErrorLastNameMsg: false})
    }
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
    console.log(event.target.value)
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
    console.log(event.target.value)
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state
    if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({
        isFormSubmitted: true,
      })
    }
    if (lastNameInput === '') {
      this.setState({showErrorLastNameMsg: true})
    }
    if (firstNameInput === '') {
      this.setState({showErrorFirstNameMsg: true})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  formSubmitted = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderForm = () => {
    const {
      firstNameInput,
      lastNameInput,
      showErrorFirstNameMsg,
      showErrorLastNameMsg,
    } = this.state
    const className = showErrorFirstNameMsg ? ' input error-field ' : 'input'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label htmlFor="first-name">FIRST NAME</label>
          <input
            type="text"
            placeholder="First name"
            className={className}
            id="first-name"
            value={firstNameInput}
            onChange={this.onChangeFirstName}
            onBlur={this.blurFirstName}
          />
          {showErrorFirstNameMsg && <p className="error-msg">Required</p>}
        </div>
        <div className="input-container">
          <label htmlFor="last-name">LAST NAME</label>
          <input
            type="text"
            placeholder="Last name"
            className={className}
            id="last-name"
            value={lastNameInput}
            onChange={this.onChangeLastName}
            onBlur={this.blurLastName}
          />
          {showErrorLastNameMsg && <p className="error-msg">Required</p>}
        </div>
        <div className="btn-container">
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="form-heading">Registration</h1>
        <div>{isFormSubmitted ? this.formSubmitted() : this.renderForm()}</div>
      </div>
    )
  }
}

export default RegistrationForm
