/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

const reqFullPath = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  reqFullPath.keys().forEach(module => reqFullPath(module));
}

configure(loadStories, module);