const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const rtlcssLoader = path.resolve(__dirname, 'rtlcss-loader.js');

module.exports = (webpackConfig, env, { paths }) => {
    // Fix for flot resize
    webpackConfig.module.rules[2].oneOf.splice(0, 0, {
        test: /jquery\.flot\.resize\.js$/,
        use: ['imports-loader?this=>window']
    });

    // Support for use custom .eslintrc
    webpackConfig.module.rules.some(rule => {
        if (Array.isArray(rule.use)) {
            const eslintUse = rule.use.find(item =>
                Object.keys(item.options).find(key => key === 'useEslintrc'),
            );
            eslintOptions = eslintUse && eslintUse.options;
            if (eslintOptions) {
                eslintOptions.useEslintrc = true;
                return true;
            }
        }
    });

    // Set globals for external plugins
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.moment': 'moment',
            'moment': 'moment',
            Raphael: 'raphael' // required by morris.js
        })
    ]);

    // Allow cofiguration of router base href
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.DefinePlugin({
            'PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL)
        })
    ]);

    return webpackConfig
}