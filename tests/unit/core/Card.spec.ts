import { mount } from '@vue/test-utils';
import Card from '@/core/Card.vue';

describe('Card component', () => {
  const cardTitle = 'Card title';
  const slot = '<div class="slot">Hello world</div>';
  it('Render component with props passed', () => {
    const wrapper = mount(Card as never, {
      propsData: { title: cardTitle },
      slots: {
        default: slot,
      },
    });

    const cardTitleEl = wrapper.find('.Card__header__title');
    const cardSlot = wrapper.find('.slot');

    expect(wrapper.vm).toBeTruthy();
    expect(cardTitleEl.text()).toBe(cardTitle);
    expect(cardSlot.html()).toBe(slot);
  });
});
