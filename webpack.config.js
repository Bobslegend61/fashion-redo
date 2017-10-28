const path = require("path");

module.exports = {
    entry: "./assets/src/js/app.js",
    output: {
        path: path.resolve(__dirname,"assets/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|routes|server.js)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env"]
                    }
                }
            }, 
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
}