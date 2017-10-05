const app = require('../app.js')

const createExpense = function (data) {
  return $.ajax({
    url: app.host + '/expenses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'expense': {
        'user_id': app.user.id,
        'kind': data.kind,
        'dueDate': data.date,
        'amount': data.amount,
        'house_id': 1
      }
    }
  })
}
const getExpenses = function () {
  console.log(app.user)
  return $.ajax({
    url: app.host + '/expenses/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
const editExpense = function (data) {
  console.log('edit expense ' + data)
  return $.ajax({
    url: app.host + '/expenses/' + data.expense_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'expense': {
        'user_id': app.user.id,
        'kind': data.kind,
        'dueDate': data.date,
        'amount': data.amount,
        'house_id': 1
      }
    }
  })
}
const deleteExpense = function (data) {
  return $.ajax({
    url: app.host + '/expenses/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
module.exports = {
  getExpenses,
  createExpense,
  editExpense,
  deleteExpense
}
