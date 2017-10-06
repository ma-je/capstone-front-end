const app = require('../app.js')
const config = require('../config.js')

// to add a user - subscribe
// review variable names
const createAccount = function (data) {
  console.log('app.host = ', config.apiOrigin)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
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
  console.log('app.host = ', config.apiOrigin)
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
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
  console.log('app.host = ', config.apiOrigin)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + app.user.id,
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
    url: config.apiOrigin + '/change-password/' + app.user.id,
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
