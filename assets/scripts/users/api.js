const app = require('../app.js')

// to add a user - subscribe
// review variable names
const createAccount = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

module.exports = {
  createAccount
}
