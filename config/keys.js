// this file will decide the credentials to return
if (process.env.NODE_ENV === 'production') {
    // we are in production
    module.exports = require('./prod');
} else {
    // we are in development
    module.exports = require('./dev');
}