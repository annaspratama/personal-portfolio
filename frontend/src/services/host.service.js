import { DEBUG, APIToken } from "../../env"

var host = null
var hostDefault = null

if (DEBUG) {
    host = "http://localhost.test/api"
    hostDefault = "http://localhost.test"
} else {
    host = "http://localhost.test/api"
    hostDefault = "http://localhost.test"
}

const headers = {
    Authorization: APIToken,
}
const staticfiles = "assets"

export { host, hostDefault, headers, staticfiles }