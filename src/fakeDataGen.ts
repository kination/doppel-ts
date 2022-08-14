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
  'phoneNumber': () => {
    return faker.phone.number()
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
    case 'phoneNumber':
      return randStringGen.phoneNumber()
    default:
      return randStringGen.unknown()
  }
}
