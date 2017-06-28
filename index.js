var config  = require('config')
  , Mongo   = require('./lib/index')
  ;

class SDK {
  constructor(options = {}) {
    let { bearer, remote } = options;

    this.mongodb = new Mongo({ bearer, remote });
  }
}

module.exports = {
  sdk : (...args) => new SDK(...args)
}
