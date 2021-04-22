import { mount } from '@vue/test-utils';
import FormField from '@/core/FormField.vue';

describe('FormField component', () => {
  const formTitle = 'Hello form';
  const readOnlyValue = 'I am readonly';
  const placeholder = 'I am placeholder';

  it('Render component as number type and editable', () => {
    const wrapper = mount(FormField as never, {
      propsData: { title: formTitle, type: 'number', placeholder },
    });

    const input = wrapper.find('input');
    const label = wrapper.find('label');

    expect(wrapper.vm).toBeTruthy();
    expect(input.exists()).toBe(true);
    expect(input.element.type).toBe('number');
    expect(input.element.placeholder).toBe(placeholder);

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe(formTitle);
  });

  it('Render component as number type and readonly and modify readonlyValue', async () => {
    const wrapper = mount(FormField as never, {
      propsData: { title: formTitle, type: 'number', isReadOnly: true, placeholder },
    });

    const input = wrapper.find('input');
    const label = wrapper.find('label');
    const readonlyEl = wrapper.find('.FormField__readonly');

    expect(wrapper.vm).toBeTruthy();
    expect(input.exists()).toBe(false);

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe(formTitle);

    expect(readonlyEl.exists()).toBe(true);
    expect(readonlyEl.text()).toBe(placeholder);

    await wrapper.setProps({ readOnlyValue });

    expect(readonlyEl.text()).toBe(readOnlyValue);
  });
});
