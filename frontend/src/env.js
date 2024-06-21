const DEBUG = Boolean(process.env.REACT_APP_DEBUG) || false
const APIToken = process.env.REACT_APP_API_KEY || null
const USEDOMAIN = process.env.REACT_APP_USE_DOMAIN || false
var APIURL = null
var URLDEFAULT = null

if (DEBUG === false && USEDOMAIN === "Live") {
    APIURL = process.env.REACT_APP_API_URL_DOMAIN
    URLDEFAULT = process.env.REACT_APP_URL_DOMAIN
} else if (DEBUG === true && USEDOMAIN === "Dev") {
    APIURL = process.env.REACT_APP_API_URL_IP
    URLDEFAULT = process.env.REACT_APP_URL_IP
} else {
    APIURL = process.env.REACT_APP_URL_LOCAL
    URLDEFAULT = process.env.REACT_APP_URL_LOCAL_DEFAULT
}

export { APIToken, APIURL, URLDEFAULT }