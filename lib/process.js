const _ = require('lodash')
const async = require('async')
const request = require('request')

module.exports = (config, row, done) => {
  let email = row[config.emailField]
  async.parallel({
    details: details.bind(null, config, email),
    searches: searches.bind(null, config, email),
    favs: favs.bind(null, config, email)
  }, (err, about) => {
    if (err) return done(err)
    row.details = _.get(about, 'details.data', [])
    row.searches = _.get(about, 'searches.data', [])
    row.favs = _.get(about, 'favs.data', [])
    console.log(JSON.stringify(row))
    done()
  })
}

function details (config, email, done) {
  let url = `${config.protocol}://${config.site}/api/crm/v1/leads/${email}`
  call(config, email, url, done)
}

function searches (config, email, done) {
  let url = `${config.protocol}://${config.site}/api/crm/v1/leads/${email}/searches`
  call(config, email, url, done)
}

function favs (config, email, done) {
  let url = `${config.protocol}://${config.site}/api/crm/v1/leads/${email}/favorites`
  call(config, email, url, done)
}

function call (config, email, url, done) {
  let opts = {
    url,
    json: true,
    headers: {
      'X-REW-API-Key': config.password
    }
  }
  request(opts, (err, resp, body) => done(err, body))
}
