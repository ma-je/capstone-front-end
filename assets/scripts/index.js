'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./users/events.js')
const expenseEvents = require('./expenses/events.js')
const getFormFields = require('../../lib/get-form-fields')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
$(document).ready(function () {
  $('#create-account').on('submit', events.onCreateAccount)
  $('#signIn').on('submit', events.signIn)
  $('#log-out-btn2').on('click', events.logoutUser)
  // $('#log-out-btn2').on('click', appEvents.logoutUser)
  $('#pwChange').on('submit', events.resetPassword)
  // expenseEvents.onGetExpense()
  $('#new-expense').on('submit', expenseEvents.onCreateExpense)
  $('#get-expenses').on('click', expenseEvents.onGetExpense)
  $('#edit-expense').on('submit', expenseEvents.onEditExpense)
})
$(document).on('click', '.delete-post', expenseEvents.onDeleteExpense)
