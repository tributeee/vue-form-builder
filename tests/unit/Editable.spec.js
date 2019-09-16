/* eslint-disable */
import { expect } from 'chai';
import { shallowMount, createWrapper } from '@vue/test-utils';
import Editable from '@/components/Editable.vue';

describe('Editable.vue', () => {
  it('renders title in p tag', () => {
    const parentId = 'test';
    const tag = 'p';
    const text = 'Hello';
    const wrapper = shallowMount(Editable, {
      propsData: { parentId, text, tag },
    });
    expect(wrapper.contains(tag)).to.be.true;
    expect(wrapper.text()).to.include(text);
  });

  it('renders title in h2 tag', () => {
    const parentId = 'test';
    const tag = 'h2';
    const text = 'Hello';
    const wrapper = shallowMount(Editable, {
      propsData: { parentId, text, tag },
    });
    expect(wrapper.contains(tag)).to.be.true;
    expect(wrapper.text()).to.include(text);
  });

  it('renders title in h3 tag', () => {
    const parentId = 'test';
    const tag = 'h3';
    const text = 'Hello';
    const wrapper = shallowMount(Editable, {
      propsData: { parentId, text, tag },
    });
    expect(wrapper.contains(tag)).to.be.true;
    expect(wrapper.text()).to.include(text);
  });

  it('makes title editable', () => {
    const parentId = 'test';
    const tag = 'h3';
    const text = 'Hello';
    const wrapper = shallowMount(Editable, {
      propsData: { parentId, text, tag },
    });
    wrapper.find('i').trigger('click');
    expect(wrapper.contains(tag)).to.be.false;
    expect(wrapper.contains('input')).to.be.true;
    expect(wrapper.find('input').element.value).to.equal(text);
  });

  it('emits fieldUpdated event on edit', () => {
    const parentId = 'test';
    const tag = 'h3';
    const text = 'Hello';
    const wrapper = shallowMount(Editable, {
      propsData: { parentId, text, tag },
    });
    wrapper.find('i').trigger('click');
    const input = wrapper.find('input');
    input.element.value = `${text} World`;
    input.trigger('input');
    const rootWrapper = createWrapper(wrapper.vm.$root);
    expect(rootWrapper.emitted('fieldUpdated')).to.exist;
  });
});
