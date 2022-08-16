import { ApiListItem, ConfigFormat } from './types'

export class ConfigParser {
  private env: string
  private apiList: ApiListItem

  constructor(configData: Object) {
    const config = configData as ConfigFormat
    this.env = config.env
    this.apiList = config.api
  }

  get envType(): string {
    return this.env
  }

  isEnvEquals(env: string): boolean {
    return this.env === env
  }

  get apis(): ApiListItem {
    return new ApiListItem(this.apiList)
  }
}
