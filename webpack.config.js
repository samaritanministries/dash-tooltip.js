var webpack = require("webpack");
var path = require("path")

const PROJECT_ROOT = path.resolve(__dirname)

module.exports = {
  entry: {
    "dist/dash-tooltip.js": "./scripts/dash_tooltip/load.js",
    ".tmp/demo_app.js": "./scripts/demo_app/main.js",
    ".tmp/demo_app.css": "./styles/demo_app.scss"
  },
  output: {
    filename: "[name]"
  },
  module: {
    loaders:[
      {
        include: [
          path.join(PROJECT_ROOT, "scripts"),
          path.join(PROJECT_ROOT, "spec")
        ],
        loader: "babel",
        test: /\.js$/
      }, {
        include: [
          path.join(PROJECT_ROOT, "scripts"),
          path.join(PROJECT_ROOT, "spec")
        ],
        loader: "ejs-compiled",
        test: /\.ejs$/
      },
      {
        include: path.join(PROJECT_ROOT, "styles"),
        loader: "style!css!sass",
        test: /\.scss$/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ],
  resolve: {
    alias: {
      "dash_tooltip": path.join(PROJECT_ROOT, "scripts", "dash_tooltip"),
      "fakes": path.join(PROJECT_ROOT, "spec", "fakes"),
      "demo_app": path.join(PROJECT_ROOT, "scripts", "demo_app"),
      "scripts": path.join(PROJECT_ROOT, "scripts")
    }, modulesDirectories: [
      path.join(PROJECT_ROOT, "node_modules"),
      path.join(PROJECT_ROOT, "bower_components")
    ]
  }
}
