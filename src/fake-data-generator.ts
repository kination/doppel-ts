import { faker } from '@faker-js/faker'


const randNumberGen = {
  'unknown': () => faker.datatype.number()
}

const randStringGen = {
  'uuid': () => faker.datatype.uuid(),
  'name': () => faker.name.fullName(),
  'phoneNumber': () => faker.phone.number(),
  'unknown': () => faker.datatype.string()
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
