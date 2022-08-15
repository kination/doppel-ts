import fakeGenerator from './fake-data-generator'
import { ApiListItem } from './types'

interface ObjectParamFormat {
  type: string
  properties?: {
    [key: string]: any
  }
  items?: []
}

function formatObject(properties: { [key: string]: any }): { [key: string]: any } {

  const apiBody: {
    [key: string]: any
  } = {}

  console.log(properties)

  Object.keys(properties).forEach((key) => {

    const data = properties[key]
    const dataType = data['type']

    if ('random' in data['value']) {      
      apiBody[key] = fakeGenerator(dataType, data['value']['random'])
    } else if ('fixed' in data['value']) {
      apiBody[key] = data['value']['fixed']
    } else {
      apiBody[key] = fakeGenerator(dataType, 'unknown')
    }
  })

  return apiBody
}

function formatList(properties: { [key: string]: any }): any[] {
  const apiBody: any[] = []
  for (const i of Array(7).keys()) {
    if (properties.type === 'object') apiBody.push(formatObject(properties.properties))
  }
  
  return apiBody
}

function appendRandomData(raw: ObjectParamFormat) {
  let res

  switch(raw.type) {
    case 'object':
      res = formatObject(raw.properties!)
      break
    case 'array':
      res = formatList(raw.items!)
      break
    default:
      break
  }

  return res
}

export default function(rawApi: ApiListItem) {
  const data: {
    [key: string]: any
  } = {}
  rawApi.apiList.forEach((val: ObjectParamFormat, key) => {
    data[key] = appendRandomData(val)
  });

  return data
}