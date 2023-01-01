import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import jsdata from "./configs/doppel.json"
// import ymldata from "./configs/hello-doppel.yml"

import runInterceptor from '../../../dist'

console.log(jsdata)

runInterceptor(jsdata, true)
createApp(App).mount('#app')
