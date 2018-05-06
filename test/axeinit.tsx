import initStoryshots from '@storybook/addon-storyshots';
import { axe, toHaveNoViolations } from 'jest-axe';
import { mount } from 'enzyme';

initStoryshots({
    framework: 'react',
    test: async ({ story, context }) => {
        const component = story.render(context);
        const wrapper = mount(component);
        expect(await axe(wrapper.html())).toHaveNoViolations();
    }
});