import fakeGenerator from './fake-data-generator'
import { ApiListItem } from './types'

interface RequestParamFormat {
  [key: string]: ObjectParamFormat
}

interface ObjectParamFormat {
  type: string
  properties?: {
    [key: string]: any
  }
  items?: []
  size?: number
}

function formatObject(properties: { [key: string]: any }): { [key: string]: any } {
  const apiBody: { [key: string]: any } = {}
  
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

function formatList(properties: { [key: string]: any }, size: number): any[] {
  const apiBody: any[] = []
  const array = [1, 2, 3]
  for (const i of Array(size).keys()) {
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
      res = formatList(raw.items!, raw.size!)
      break
    default:
      break
  }

  return res
}

export default function(rawApi: ApiListItem) {
  const data: {
    [key: string] : any
  } = {}

  rawApi.apiList.forEach((val: RequestParamFormat, key) => {
    Object.entries(val).forEach(([k, v]) => {
      const randomData = appendRandomData(v)
      
      if (data[key] === undefined) data[key] = {}

      data[key][k] = randomData
    })
    
  });

  return data
}
