
import * as path from 'path';
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';

const pathToStorybookStatic = path.join(__dirname, '../', 'storybook-static');

initStoryshots({
  suite: 'Image snapshots',
  storyKindRegex: /Wakka$/,
  framework: 'react',
  test: imageSnapshot({
    storybookUrl: `file://${pathToStorybookStatic}`,
    getMatchOptions: () => ({
      failureThreshold: 0.02, // 2% threshold,
      failureThresholdType: 'percent',
    }),
  }),
});
