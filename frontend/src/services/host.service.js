import { DEBUG, APIToken } from "../../env"

var host = null
var hostDefault = null

if (DEBUG) {
    host = "http://localhost.test/api"
    hostDefault = "http://localhost.test"
} else {
    host = "http://13.213.43.203/api"
    hostDefault = "http://13.213.43.203"
}

const headers = {
    Authorization: APIToken,
}
const staticfiles = "assets"

export { host, hostDefault, headers, staticfiles }