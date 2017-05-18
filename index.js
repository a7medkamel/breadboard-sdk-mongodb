var config  = require('config')
  , Mongo   = require('./lib/index')
  ;

class SDK {
  constructor(options = {}) {
    let { bearer } = options;

    this.mongodb = new Mongo({ bearer });
  }
}

module.exports = {
  sdk : (...args) => new SDK(...args)
}
