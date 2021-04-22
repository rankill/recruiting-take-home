import { mount } from '@vue/test-utils';
import Logo from '@/core/Logo.vue';

describe('Header component', () => {
  it('Render component', () => {
    const wrapper = mount(Logo as never);
    expect(wrapper.vm).toBeTruthy();
  });
});
