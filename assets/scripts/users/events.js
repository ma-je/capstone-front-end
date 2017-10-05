const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const getFormFields = require('../../lib/get-form-fields.js')
const app = require('../app.js')

const onCreateAccount = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  if (data.credentials.password === data.credentials.password_confirmation) {
    // console.log('hit')
    api.createAccount(data)
      .then(ui.createAccountSuccess)// if works
      .catch(ui.onError) // if doesn't work
  } else {
    ui.onError()
  }
}

// event handler for login form
const signIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('hi')
  api.logInUser(data)
    .then(ui.onSigninSuccess)
    .catch(ui.onSigninFailure)
}

const logoutUser = function () {
  // const data = getFormFields(this)
  event.preventDefault(event)
  api.logOut()
    .then(ui.onLogoutSuccess)
    .catch(ui.onLogoutFailure)
}

const resetPassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.passwordReset(data)
    .then(ui.onResetSuccess)
    .catch(ui.onResetFailure)
}

module.exports = {
  onCreateAccount,
  signIn,
  logoutUser,
  resetPassword
}
