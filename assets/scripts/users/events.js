const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const getFormFields = require('../../lib/get-form-fields.js')
const app = require('../app.js')

const onCreateAccount = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    api.createAccount(data)
      .then(ui.CreateAccountSuccess)// if works
      .catch(ui.onError) // if doesn't work
  } else {
    ui.onError()
  }
}
//    if (data.credentials.password === data.credentials.password_confirmation) {
// api.signUpUser(data)
//     .then(ui.onSignupSuccess) // if works
//     .catch(ui.signUpFailure) // if doesn't work
//    } } else {
//      blogUi.signUpFailure()
//    }
//   // going to have some error popping saying passwords dont match
// }
module.exports = {
  onCreateAccount
}
