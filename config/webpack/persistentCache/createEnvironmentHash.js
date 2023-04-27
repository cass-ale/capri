'use strict';
const { createHash } = require('crypto');

module.exports = env => {
  const hash = crypto.createHash('sha512WithRSAEncryption');
  hash.update(JSON.stringify(env));

  return hash.digest('hex');
};
