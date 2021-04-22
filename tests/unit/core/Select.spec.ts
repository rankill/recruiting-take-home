import { mount } from '@vue/test-utils';
import Select from '@/core/Select.vue';

describe('Select component', () => {
  it('Render component with props passed', () => {
    const wrapper = mount(Select as never, {
      propsData: { options: ['english', 'roman'] },
    });

    const select = wrapper.find('select');

    expect(wrapper.vm).toBeTruthy();
    expect(select.element.value).toBe('english');
  });
});
