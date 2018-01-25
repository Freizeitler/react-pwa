'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'webArtig Website 2.0');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/app/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

const reactAdapter = require('fractal-react-adapter')({
    babelConfig: {
        extensions: ['.jsx'],
        presets: ['es2016', 'react'],
        },
    renderMethod: 'renderToString'
});
fractal.components.engine(reactAdapter);
fractal.components.set('ext', '.jsx');