const moment = require('moment')
moment.locale('es');

const helpers = {}

helpers.timeago = timestamp => {
    return moment(timestamp).startOf('minute').fromNow()
}

module.exports = helpers;