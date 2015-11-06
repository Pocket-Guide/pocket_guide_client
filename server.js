var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err)
  }
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 8080,8080 );
});
