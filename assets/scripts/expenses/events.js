const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const getFormFields = require('../../lib/get-form-fields.js')
const app = require('../app.js')

const onGetExpense = function (event) {
  // event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('made it to events page')
  // $('.new-post input').not('.submit-button').val('')
  api.getExpenses(data)
    .then(ui.onGetExpenseSuccess)
    .catch(ui.onError)
}
const onCreateExpense = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('made it to events page')
  // $('.new-expense input').not('.submit-button').val('')
  api.createExpense(data)
    .then(ui.onCreateExpenseSucess)
    .catch(ui.onError)
}
// editing expense
const onEditExpense = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.editExpense(data)
    .then(ui.editExpenseSuccess)
    .catch(ui.onError)
}
module.exports = {
  // onExpenseSuccess,
  onGetExpense,
  onCreateExpense,
  onEditExpense
}
