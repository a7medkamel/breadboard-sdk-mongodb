var Promise   = require('bluebird')
  , config    = require('config')
  , _         = require('lodash')
  , urljoin   = require('url-join')
  , rp        = require('request-promise')
  ;

class Mongo {
  constructor(options = {}) {
    this.bearer = options.bearer;
    this.remote = options.remote;
  }

  creds(json) {
    return Promise
            .resolve(rp.post({
                url     : urljoin(config.get('account.url'), 'mongodb/creds')
              , method  : 'POST'
              , json    : {
                  uri : this.remote
              }
              , headers : { 'authorization' : this.bearer }
            }));
  }
}

module.exports = Mongo;
