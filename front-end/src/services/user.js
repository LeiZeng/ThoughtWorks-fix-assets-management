import request from 'superagent'
import apisBuilder from '../../utils/apisBuilder'
import config from './config.json'

let mock
var endpoint = config.production.endpoint

// mock the http request if not production
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  mock = require('./mock-user')
  endpoint = config.development.endpoint
}

const userApis = {
  login: {
    method: 'post',
    url: '/auth/login'
  },
  logout: {
    method: 'post',
    url: '/auth/logout'
  },
  assets: {
    method: 'get',
    url: '/users/allassets'
  },
  create: {
    method: 'post',
    url: '/users/create'
  }
}

/**
 * build apis from the config or add mock apis
 */
export default apisBuilder(userApis, endpoint, mock)
