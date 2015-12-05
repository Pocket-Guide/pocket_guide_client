import Adapter from './adapter';
import Request from './request'

export default class Fetcher {
  constructor() {
    this.adapter = new Adapter();
  }

  setToken(token) {
    this.token = token
  }

  post(url, body){
    return this.process('POST', url, body)
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }



  process(method, url, body, parameters) {
    return this.adapter.call(
      new Request({
        headers: this.headers,
        body,
        method,
        parameters,
        url
      }).raw()
    );
  }
}