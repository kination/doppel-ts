import Pretender from 'pretender'
import { ConfigParser } from './src/config-parser'
import dataMapper from './src/data-mapper'


function runInterceptor(rawdata: Object, triggerInterceptor: boolean) {
  if (!triggerInterceptor) return
  
  console.log(' --- run doppel --- ')
  const config = new ConfigParser(rawdata)
  const map = dataMapper(config.apis)
  
  const server = new Pretender(function() {
    for (const k of Object.keys(map)) {
      if ('GET' in map[k]) {
        this.get(`${k}`, (request) => {
          return [200, { 'Content-Type': 'application/json' }, JSON.stringify(map[k]['GET'])];
        })
      }
      
      if ('POST' in map[k]) {
        this.post(`${k}`, (request) => {
          return [200, { 'Content-Type': 'application/json' }, JSON.stringify(map[k]['POST'])];
        })
      } 
    }
  })
}

export default runInterceptor
