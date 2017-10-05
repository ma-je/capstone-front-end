'use strict'
const app = require('../app.js')
const events = require('./events.js')

// if successfully signed up
const createAccountSuccess = function () {
  console.log('Sign up success')
  $('#errorMessage').empty()
  $('#errorMessageModalSignUp').empty()
  $('#create-account').hide()
  $('.modal-footer-reg').hide()
  $('#loginButton2').show()
  $('#create-account').find('input:text').val('')
  $('#create-account').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Please login. </p></div>')
}
const onError = function () {
  console.log('There was problem signing up, please try again!')
  console.log('sign-up fail')
  $('#errorMessageModalSignUp').empty()
  $('#errorMessage').empty()
  $('#create-account').find('input:text').val('')
  $('#create-account').find('input:password').val('')
  $('#errorMessageModalSignUp').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

const onSigninSuccess = function (data) {
  // console.log(data.user)
  app.user = data.user
  $('#login input').not('.submit').val('')
  $('#pwChange').show()
  $('.register-button').hide()
  $('.login-button').hide()
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
}
const onSigninFailure = function (error) {
  console.log(error)
  $('.errorMessageModalLogin').empty()
  // console.log('Invalid username or password.')
  $('.errorMessageModalLogin').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Your username or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function (data) {
  console.log(data)
  console.log('signed out')
  $('.errorMessageModalLogin').empty()
 // $('#myAccountButton').hide()
 // $('.myAccountSection').hide()
 // $('#myAccountButton2').hide()
 // $('#login').show()
 // $('.register-button').show()
 // $('.login-button').show()
 // $('.modal-footer-login').show()
 // $('#registration').show()
 // $('.modal-footer-reg').show()
 // $('#log-out-btn').hide()
}
const onLogoutFailure = function () {
  console.log('error signing out')
}
module.exports = {
  createAccountSuccess,
  onError,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure
}
