'use strict'
const app = require('../app.js')
const events = require('./events.js')

// if successfully signed up
const CreateAccountSuccess = function () {
  console.log('Sign up success')
  // $('#errorMessage').empty()
  // $('#errorMessageModalSignUp').empty()
  // $('#create-account').hide()
  // $('.modal-footer-reg').hide()
  // $('#loginButton2').show()
  // // $('#loginButton2').show()
  // $('#create-account').find('input:text').val('')
  // $('#create-account').find('input:password').val('')
  // $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Please login. </p></div>')
}
 const onError = () => {
console.log('There was problem signing up, please try again!')
//   // console.log('sign-up fail')
//   $('#errorMessageModalSignUp').empty()
//   $('#errorMessage').empty()
//   $('#create-account').find('input:text').val('')
//   $('#create-account').find('input:password').val('')
//   $('#errorMessageModalSignUp').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
 }

module.exports = {
  CreateAccountSuccess,
  onError
}
