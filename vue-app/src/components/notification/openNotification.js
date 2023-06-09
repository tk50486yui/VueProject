import { notification } from 'ant-design-vue'

function openNotification (response) {
  let type = 'info' // success info warning error
  let title = ''
  let description = ''
  switch (response.status) {
    case 200:
      type = 'success'
      title = 'Success'
      description = 'Successfully'
      break
    case 400:
      type = 'error'
      title = 'Faild'
      description = 'Invalid data'
      break
    case 403:
      type = 'error'
      title = 'Forbidden'
      description = 'Access denied.'
      break
    case 404:
      type = 'error'
      title = 'Not Found'
      description = 'Data not found.'
      break
    case 409:
      type = 'error'
      title = 'Duplicate'
      description = 'Data duplicate.'
      break
    default:
      type = 'error'
      title = 'Error'
      description = 'Internal server error.'
  }

  notification[type]({
    message: title,
    description: description
  })
}

export default openNotification
