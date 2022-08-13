import { faker } from '@faker-js/faker'


const randNumberGen = {
  'unknown': () => {
    return faker.datatype.number()
  }
}

const randStringGen = {
  'uuid': () => {
    return faker.datatype.uuid()
  },
  'name': () => {
    return faker.name.fullName()
  },
  'unknown': () => {
    return faker.datatype.string()
  }
}

export default function (dataType: string, dataName: string) {
  if (dataType === 'number') {
    return randNumberGen.unknown()
  }

  switch (dataName) {
    case 'uuid':
      return randStringGen.uuid()
    case 'name':
      return randStringGen.name()
    default:
      return randStringGen.unknown()
  }
}
