'use strict'

const store = require('./../store.js')

const createReleaseSuccess = createReleaseResponse => {
  store.release = createReleaseResponse.release
  $('.release-message').html('Successfully created release!')
  $('.release-message').addClass('success-message')
  $('.release-message').removeClass('error-message')
  $('.create-release-form').trigger('reset')
  setTimeout(() => $('.release-message').empty(), 500)
}

const failure = () => {
  $('.release-message').html('Error: Something went wrong.')
  $('.release-message').addClass('error-message')
  $('.release-message').removeClass('success-message')
  setTimeout(() => $('.release-message').empty(), 500)
}

const updateReleaseSuccess = updateReleaseResponse => {
  store.release = updateReleaseResponse.release
  $('.release-message').html('Successfully updated release!')
  $('.release-message').addClass('success-message')
  $('.release-message').removeClass('error-message')
  $('.update-release-form').trigger('reset')
  setTimeout(() => $('.release-message').empty(), 500)
}

const deleteReleaseSuccess = () => {
  $('.release-message').html('Successfully deleted release!')
  $('.release-message').addClass('success-message')
  $('.release-message').removeClass('error-message')
  setTimeout(() => $('.release-message').empty(), 500)
}

module.exports = {
  createReleaseSuccess,
  failure,
  updateReleaseSuccess,
  deleteReleaseSuccess
}
