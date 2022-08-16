export class ApiListItem {
  dataList: Map<string, any>

  constructor(raw: Object) {
    this.dataList = new Map(Object.entries(raw))
  }

  get apiList() {
    return this.dataList
  }
}

export interface ApiResponseFormat {
  key: string
  code: number
  body: any
}

export interface ConfigFormat {
  env: string
  api: ApiListItem
}
