#!/usr/bin/env node
const fs = require('fs')
const async = require('async')
const csv = require('csv-parser')

const process = require('./lib/process')
const config = require('rc')('rew', {
  protocol: 'http',
  emailField: 'Email Address'
})

// must haves
if (!config.username) usage()
if (!config.password) usage()
if (!config.site) usage()
if (!config._.length) usage()

const leads = [];
fs.createReadStream(config._[0])
  .pipe(csv())
  .on('data', (data) => leads.push(data))
  .on('end', () => processResults(leads))

function processResults (leads) {
 async.eachLimit(leads, 1, process.bind(null, config))
}


function usage() {
  console.log('USAGE:')
  console.log('rew-sucker leads.csv --site=www.paranych.com --username=crm --password=aaaaaaaaaaaa647bb3d88a52aaaaaaaaaac7cfaaaaaaaaaa579c77b879a633baa')
  process.exit()
}
