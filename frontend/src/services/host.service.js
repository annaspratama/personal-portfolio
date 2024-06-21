import { APIToken, APIURL, URLDEFAULT } from "../env"

const host = APIURL
const hostDefault = URLDEFAULT

const headers = {
    Authorization: APIToken,
}
const staticfiles = "assets"

export { host, hostDefault, headers, staticfiles }