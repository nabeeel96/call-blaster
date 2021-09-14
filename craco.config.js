const CracoLessPlugin = require('craco-less');

// #02AA31
// #d32f2f

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        math: 'always',
                        modifyVars: { '@primary-color': '#766bf0', '@secondary-color': '#0abda0' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};