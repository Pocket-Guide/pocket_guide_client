import Adapter from './adapter';
import Request from './request'

export default class Fetcher {
  constructor() {
    this.adapter = new Adapter();
  }

  setToken(token) {
    console.log(token)
    this._token = token
  }

  post(url, body){
    return this.process('POST', url, body)
  }

  get (url, parameters) {
    return this.process('GET', url, null, parameters);
  }

  delete(url, parameters) {
    return this.process('DELETE', url, null, parameters);
  }


  get headers() {
    console.log(this._token)
    return {
      Authorization: `Bearer ${this._token}`,
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