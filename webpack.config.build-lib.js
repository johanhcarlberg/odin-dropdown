const path = require('path');

module.exports = {
    entry: {
        dropdown: './src/dropdown.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'dropdown',
            type: 'umd',
            export: 'default',
        },
        globalObject: 'this',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}