import fetch from 'isomorphic-fetch'

export default class Adapter {
  call(environment) {
    return fetch(
      environment.url,
      {
        body: environment.body,
        headers: environment.headers,
        method: environment.method,
      }
    ).then((response) => {
      return response.json().then((body) => {
        return {
          body,
          headers: response.headers,
          status: response.status,
        };
      });
    });
  }
}
