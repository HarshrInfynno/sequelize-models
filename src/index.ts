import { connection } from './db/config'
import { app_user_info as AppUserInfo } from './db/models/AppUserInfo'
import { co_info as CoInfo } from './db/models/CoInfo'
import { app_user_property as UserProperty } from './db/models/AppUserProperty'

export default connection

export { AppUserInfo, CoInfo, UserProperty }
