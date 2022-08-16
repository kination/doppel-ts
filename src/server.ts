import Pretender from 'pretender'
import { ConfigParser } from './config-parser'
import dataMapper from './data-mapper'

export function runInterceptor(rawdata: Object) {
  console.log(' --- run interceptor --- ')
  const config = new ConfigParser(rawdata)
  const map = dataMapper(config.apis)

  const server = new Pretender(function() {
    for (const k of Object.keys(map)) {
      this.get(`${k}`, (request) => {
        return [200, { 'Content-Type': 'application/json' }, JSON.stringify(map[k])];
      })
    }
  })
}

