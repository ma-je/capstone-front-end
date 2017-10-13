const tableHandlebars = function (expense, kind, dueDate, amount, dataId) {
  const expensesTable = require('./templates/expenses-table.handlebars')
  const context = {
    'expense': expense,
    'kind': kind,
    'dueDate': dueDate,
    'amount': amount,
    'dataId': dataId
  }
  const tableTemplate = expensesTable(context)
  $('#expenses').append(tableTemplate)
}

module.exports = {
  tableHandlebars
}
