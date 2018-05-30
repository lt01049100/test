// 配置
// let env = process.env.NODE_ENV
// window.__DEV__ = true
//const host = env === 'development' ? 'http://mb.dev.hubpd.com/' : env === 'production' ? 'http://mb.dev.hubpd.com/' : 'http://mb.dev.hubpd.com/'
// const host = env === 'development' ? 'http://192.168.37.23:8080/' : env === 'production' ? 'http://192.168.37.23:8080/' : 'http://192.168.37.23:8080/'
// const host = env === 'development' ? 'http://43.250.238.123/' : env === 'production' ? 'http://43.250.238.123/' : 'http://43.250.238.123/'
const host = env === 'development' ? 'http://mobilevideo.people.com.cn/' : env === 'production' ? 'http://mobilevideo.people.com.cn/' : 'http://mobilevideo.people.com.cn/'
//const root = env === 'development' ? 'movie/' : 'movie/'
// const host = env === 'development' ? 'http://apptest.mi2010.com/' : env === 'production' ? 'http://apptest.mi2010.com/' : 'http://apptest.mi2010.com/'
const root = env === 'development' ? '' : ''
let config = {
    env: env,
    host: host,
    root: root,
    serverRoot: 'xmt/'
}
module.exports = config
