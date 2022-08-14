import Pretender from 'pretender'
import { ConfigParser } from './configParser'
import dataMapper from './dataMapper'


function getMappedApi() {

}

export function runInterceptor(configFilePath: string) {
  const config = new ConfigParser('./demo_configs/hello-doppel.yml')

  // if (!config.isEnvEquals(process.env.NODE_ENV)) {
    // return
  // }

  const map = dataMapper(config.apis)
  console.log(map)

  /*
  const server = new Pretender(function() {
    
    this.get('/photos', function(request){
      let all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){
        return PHOTOS[k];
      }));
      return [200, {'Content-Type': 'application/json'}, all];
      });
  })
  */

  // const server = new Pretender(function(){
    // this.get('/photos', function(request){
    //   let all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){
    //     return PHOTOS[k];
    //   }));
    //   return [200, {'Content-Type': 'application/json'}, all];
    // });
  
    // this.get('/photos/:id', function(request){
    //   const id: string = request!.params!.id as string
    //   return [200, {'Content-Type': 'application/json'}, JSON.stringify(PHOTOS[id])];
    // });
  // });
}
