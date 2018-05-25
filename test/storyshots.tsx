import * as path from 'path';
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';

const pathToStorybookStatic = path.join(__dirname, '../', 'storybook-static');

initStoryshots({
  suite: 'Image snapshots',
  storyKindRegex: /Black$/,
  framework: 'react',
  test: imageSnapshot({
    storybookUrl: `file://${pathToStorybookStatic}`,
    getMatchOptions: () => ({
      failureThreshold: 0.001, // 2% threshold,
      failureThresholdType: 'percent',
    }),
  }),
});
