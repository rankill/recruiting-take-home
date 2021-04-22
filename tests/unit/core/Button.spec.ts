import { mount } from '@vue/test-utils';
import Button from '@/core/Button.vue';

describe('Button component', () => {
  it('Render component with props passed', () => {
    const wrapper = mount(Button as never, {
      propsData: { isDisabled: false, isPrimary: false },
    });

    const button = wrapper.find('button');

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.classes()).not.toContain('Button--primary');
    expect(button.element.disabled).toBe(false);
  });

  it('Render component as disabled', () => {
    const wrapper = mount(Button as never, {
      propsData: { isDisabled: true },
    });

    const button = wrapper.find('button');

    expect(wrapper.vm).toBeTruthy();
    expect(button.element.disabled).toBe(false);
  });

  it('Render component as primary', () => {
    const wrapper = mount(Button as never, {
      propsData: { isPrimary: true },
    });

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.classes()).toContain('Button--primary');
  });

  it('Render component with default slot', () => {
    const mockText = 'Hello button';
    const wrapper = mount(Button as never, {
      propsData: { isPrimary: true },
      slots: {
        default: mockText,
      },
    });

    const button = wrapper.find('button');

    expect(wrapper.vm).toBeTruthy();
    expect(button.text()).toBe(mockText);
  });

  it('Emit clicked event', async () => {
    const wrapper = mount(Button as never, {
      propsData: { isPrimary: true },
    });

    wrapper.vm.$emit('clicked');

    // Disable any rule for next line because vue test utils does not recognize the nextTick fn
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    await (wrapper.vm as any).$nextTick();

    expect(wrapper.emitted().clicked).toBeTruthy();

    // assert event count
    expect(wrapper.emitted().clicked.length).toBe(1);

    // assert event payload
    expect(wrapper.emitted().clicked[1]).toEqual(undefined);
  });
});
