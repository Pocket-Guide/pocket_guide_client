import Fetcher from './fetchers'

if(process) {
  global.localStorage = {
    getItem(key, value){
      return this[key] ? this[key].value : void 0;
    },
    setItem(key, value){
      this[key] = value;
      return;
    }
    removeItem(key){
      this[key] = null;
      return;
    }
  };
}


const fetcher = new Fetcher();
fetcher.setToken(localStorage.getItem('access_token'));
export default fetcher;
