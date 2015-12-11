import urlParser from 'url';

export default class Request {
  constructor({body, headers = {}, method, parameters = {}, url}) {
    this.body = body;
    this.headers = headers;
    this.method = method;
    this.parameters = parameters;
    this.urlString = url;
  }

  buildUrl() {
    const urlObject = urlParser.parse(this.urlString)
    urlObject.serch = null;
    urlObject.query = {};
    Object.keys(this.parameters).forEach((key) => {
      urlObject.query[key] = this.parameters[key]
    })
    return urlParser.format(urlObject)
  }

  raw() {
    return {
      body: this.body,
      headers: this.headers,
      method: this.method,
      url: this.buildUrl()
    }
  }
}
