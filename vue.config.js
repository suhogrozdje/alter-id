// vue.config.js
module.exports = {
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            // mutate for development...
        }
    }
}