'use strict'
const app = require('../app.js')
const events = require('./events.js')
const template = require('../handlebars-data')

const loopExpenses = function (data) {
  // debugger
  $('#expenses').empty()
  for (let i = 0; i < data.expenses.length; i++) {
    const expenses = data.expenses.length
    const kind = data.expenses[i].kind
    const dueDate = data.expenses[i].dueDate
    const amount = data.expenses[i].amount
    const dataId = data.expenses[i].id
    template.tableHandlebars(expenses, kind, dueDate, amount, dataId)
    // $('#expenses').append(
    //   '<p>' + 'Expense Id: ' + data.expenses[i].id + ' ' + data.expenses[i].kind + ' ' + data.expenses[i].dueDate + ' ' + data.expenses[i].amount + ' ' + '</p>' +
    //   '<button class="delete-post" data-id="' + data.expenses[i].id + '" id="' + data.expenses[i].id + '" type="button" class="btn">Delete</button>' +
    //         '<button class="edit-post" id="' + data.expenses[i].id + '" type="button" class="btn">Edit</button>'
    // )
  }
}
// creating posts successfully
const onCreateExpenseSucess = function (data) {
  app.data = data.post
  console.log(data)
  console.log('successfully posted')
  // $('#new-expense input').not('.submit-button').val('')
}
const onGetExpenseSuccess = function (data) {
  app.data = data.user
  console.log('got expesnes')
  console.log(data)
  loopExpenses(data)
}
const onError = function (error) {
  console.log(error)
}

const editExpenseSuccess = function (data) {
  console.log('expenses has been edited')
  console.log('you have reached ui.js update-posts')
}
const deleteExpenseSuccess = function (data) {
  console.log('Post deleted')
}
module.exports = {
  onGetExpenseSuccess,
  onCreateExpenseSucess,
  onError,
  editExpenseSuccess,
  deleteExpenseSuccess
}
