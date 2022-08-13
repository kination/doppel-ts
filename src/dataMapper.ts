import { faker } from '@faker-js/faker'

import { ConfigParser } from './configParser'
import randGen from './fakeDataGen'
import { ApiListItem } from './types'

interface ObjectParamFormat {
  type: string
  properties: {
    [key: string]: any
  }
}

function formatObject(properties: {
  [key: string]: any
}) {

  const apiBody: {
    [key: string]: any
  } = {}

  Object.keys(properties).forEach((key) => {

    const data = properties[key]
    const dataType = data['type']

    if ('random' in data['value']) {
      apiBody[key] = randGen(dataType, data['value']['random'])
    } else if ('fixed' in data['value']) {
      apiBody[key] = data['value']['fixed']
    } else {
      apiBody[key] = randGen(dataType, 'unknown')
    }
  })

  console.log(apiBody)

  return apiBody
}

function appendRandomData(raw: ObjectParamFormat) {
  let res
  // console.log(raw)
  switch(raw.type) {
    case 'object':
      formatObject(raw.properties)
      break
    case 'list':
      break
    default:
      break
  }
}

export default function(rawApi: ApiListItem) {
  // console.log(rawApi.apiList)
  // console.log('--------------')
  rawApi.apiList.forEach((val: ObjectParamFormat, key) => {
    // console.log(`${key} - ${JSON.stringify(val)}`)
    appendRandomData(val)
  });
}