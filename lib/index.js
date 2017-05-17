var Promise   = require('bluebird')
  , config    = require('config')
  , _         = require('lodash')
  , urljoin   = require('url-join')
  , rp        = require('request-promise')
  ;

class Mongo {
  constructor(options = {}) {
    this.bearer = options.bearer;
  }

  creds(json) {
    return Promise
            .resolve(rp.post({
                url     : urljoin(config.get('services.url'), 'api/sms')
              , headers : { 'authorization' : this.bearer }
              , method  : 'POST'
              , json
            }));
  }
}

module.exports = Mongo;
