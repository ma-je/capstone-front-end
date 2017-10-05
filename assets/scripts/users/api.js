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
const logInUser = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const logOut = function (id) {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const passwordReset = function (data) {
  // console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

module.exports = {
  createAccount,
  logInUser,
  logOut,
  passwordReset
}
