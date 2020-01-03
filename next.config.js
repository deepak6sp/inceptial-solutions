const markdownRenderer = require('react-markdown-reader').renderer;
module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: [{
        loader: 'html-loader'
      }, {
        loader: 'markdown-loader',
        options: {
          renderer: markdownRenderer(/**languages[string]**/)
        }
      }]
    })
    return config
  },
}