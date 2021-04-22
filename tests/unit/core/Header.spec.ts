import { mount } from '@vue/test-utils';
import Header from '@/core/Header.vue';

describe('Header component', () => {
  it('Render component and check if logo exists', () => {
    const wrapper = mount(Header as never);

    const logoEl = wrapper.find('.Logo');

    expect(wrapper.vm).toBeTruthy();
    expect(logoEl.exists()).toBe(true);
  });
});
