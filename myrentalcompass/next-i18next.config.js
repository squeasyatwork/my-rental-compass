const path = require('path');


module.exports = {
    i18n: {
        locales: ['en', 'hi', 'ms', 'zh'],
        defaultLocale: 'en',
        localePath: path.resolve('./public/locales')
    },
}