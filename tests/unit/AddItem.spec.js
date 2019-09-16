/* eslint-disable */
import { expect } from 'chai';
import { shallowMount, createWrapper } from '@vue/test-utils';
import AddItem from '@/components/AddItem.vue';

describe('AddItem.vue', () => {
  it('renders add new page when page passed', () => {
    const parentId = 'test';
    const item = 'page';
    const wrapper = shallowMount(AddItem, {
      propsData: { parentId, item },
    });
    expect(wrapper.text()).to.include(`Add new ${item}`);
  });

  it('renders add new section when section passed', () => {
    const parentId = 'test';
    const item = 'section';
    const wrapper = shallowMount(AddItem, {
      propsData: { parentId, item },
    });
    expect(wrapper.text()).to.include(`Add new ${item}`);
  });

  it('renders add new question when question passed', () => {
    const parentId = 'test';
    const item = 'question';
    const wrapper = shallowMount(AddItem, {
      propsData: { parentId, item },
    });
    expect(wrapper.text()).to.include(`Add new ${item}`);
  });

  it('emits contentAdded event on click', () => {
    const parentId = 'test';
    const item = 'question';
    const wrapper = shallowMount(AddItem, {
      propsData: { parentId, item },
    });
    wrapper.trigger('click');
    const rootWrapper = createWrapper(wrapper.vm.$root);
    expect(rootWrapper.emitted('contentAdded')).to.exist;
  });
});
