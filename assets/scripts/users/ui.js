'use strict'
const app = require('../app.js')
const events = require('./events.js')
const expenseEvents = require('../expenses/events.js')

// if successfully signed up
const createAccountSuccess = function () {
  console.log('Sign up success')
  $('#errorMessage').empty()
  $('#errorMessageModalSignUp').empty()
  $('#create-account').hide()
  $('.modal-footer-reg').hide()
  $('#signUpSuccessinButton2').show()
  $('#create-account').find('input:text').val('')
  $('#create-account').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Please sign in. </p></div>')
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
  $('#signIn input').not('.submit').val('')
  $('#pwChange').show()
  $('.create-account-button').hide()
  $('.signin-button').hide()
  $('#signin').find('input:text').val('')
  $('#signin').find('input:password').val('')
  $('#signin').hide()
  $('.modal-footer-signin').hide()
  $('#log-out-btn').show()
  $('.btn btn-secondary3').show()
  $('.modal-footer-changepwd').show()
  expenseEvents.onGetExpense()
}
const onSigninFailure = function (error) {
  console.log(error)
  $('.errorMessageModalsignin').empty()
  // console.log('Invalid username or password.')
  $('.errorMessageModalsignin').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Your username or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function (data) {
  // console.log(data)
  console.log('signed out')
  $('.errorMessageModalsignin').empty()
  $('#signIn').show()
  $('.signin-button').show()
  $('.modal-footer-signin').show()
  $('.modal-footer-reg').show()
  $('#log-out-btn2').hide()
}
const onLogoutFailure = function () {
  console.log('error signing out')
}

const onResetSuccess = function () {
  $('#reset-success').empty()
  // console.log('password reset successful')
  $('#passChange input').not('.submit').val('')
  $('#passChange').hide()
  $('.modal-footer-changepwd').hide()
  // $('#myAccountButton2').show()
  $('#reset-success').prepend('<div class="row" style="text-align: center; color: black"> <p><br>Your password has been reset.</p></div>')
}

const onResetFailure = function () {
  // console.log('password reset failed')
  $('#reset-fail').empty()
  $('#reset-fail').prepend('<div class="row" style="text-align: center; color: red"> <p>Your password has been reset.</p></div>')
}
module.exports = {
  createAccountSuccess,
  onError,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onResetSuccess,
  onResetFailure
}
