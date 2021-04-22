import { shallowMount } from '@vue/test-utils';
import Button from '@/core/Button.vue';

describe('Button component', () => {
  const placeholder = 'new message';
  const inputType = 'tel';
  const label = 'Your input';
  
  it('render component with props passed', () => {
    const wrapper = shallowMount(Button, {
      propsData: { placeholder, inputType, label },
    });
    
    expect(wrapper.find('.input__field').attributes('placeholder')).toMatch(
      placeholder
    );
  });
});
