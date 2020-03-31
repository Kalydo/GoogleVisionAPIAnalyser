'use strict';

var parseString = require('string-template');


function DefaultTransporter(){

};

DefaultTransporter.prototype.request = function(opts, auth, opt_callback) {
  const url = (opts.uri || opts.url) + '?key=' + auth;
  let err = false;
  let response = null;
  return fetch(url, opts).then(
    result => {
      response = result;
      err = result.ok !== true;
      return result.text();
    }
  ).then(text => {
    this.wrapCallback_(opt_callback)(err, response, text);
  });
};

DefaultTransporter.prototype.wrapCallback_ = function(opt_callback) {
  return function(err, res, body) {
    if (err || !body) {
      return opt_callback && opt_callback(err, body, res);
    }
    try {
      body = JSON.parse(body);
    } catch (err) { /* no op */ }

    if (body && body.error && res.statusCode !== 200) {
      if (typeof body.error === 'string') {
        err = new Error(body.error);
        err.code = res.statusCode;

      } else if (Array.isArray(body.error.errors)) {
        err = new Error(body.error.errors.map(
                         function(err) { return err.message; }
                       ).join('\n'));
        err.code = body.error.code;
        err.errors = body.error.errors;

      } else {
        err = new Error(body.error.message);
        err.code = body.error.code || res.statusCode;
      }

      body = null;

    } else if (res.statusCode >= 500) {
      err = new Error(body);
      err.code = res.statusCode;
      body = null;
    }

    if (opt_callback) {
      opt_callback(err, body, res);
    }
  };
};

function createAPIRequest (parameters, callback) {
  var body;
  var params = parameters.params;
  var options = Object.assign({}, parameters.options);

  if (typeof params === 'function') {
    callback = params;
    params = {};
  }

  params = Object.assign(
    {},
    params
  );


  delete params.media;
  delete params.resource;
  delete params.auth;

  var headers = params.headers || {};
  delete params.headers;


  Object.keys(params).forEach(function (key) {
    if (key.slice(-1) === '_') {
      var newKey = key.slice(0, -1);
      params[newKey] = params[key];
      delete params[key];
    }
  });

  parameters.pathParams.forEach(function (param) {
    delete params[param];
  });


  if (parameters.bodyJSON) {
      options.body = JSON.stringify(parameters.data);
  }

  options.headers = headers;

  options = Object.assign({},
    parameters.context.google._options,
    parameters.context._options,
    options
  );
  delete options.auth;
  delete options.params;


  if (body) {
    body.pipe(this.req);
  }
  return this.req;
}

module.exports = createAPIRequest;
