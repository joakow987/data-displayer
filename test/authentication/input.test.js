import React from 'react';
import { mount, shallow } from 'enzyme';
import Input from '../../src/components/input';

describe('authentication input', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const toHaveLength = (wrapper, type, value) => expect(wrapper.find(type)).toHaveLength(value);
  const propToEqual = (wrapper, propName, value) => expect(wrapper.prop(propName)).toEqual(value);

  it('username input  has proper structure', () => {
    const wrapper = shallow(<Input />);
    const elements = ['div', 'input', 'label'];
    elements.forEach((element) => toHaveLength(wrapper, element, 1));
  });

  it('password input  has proper structure', () => {
    const wrapper = shallow(<Input title="Password" />);
    const elements = ['div', 'input', 'label', 'button', 'img'];
    elements.forEach((element) => toHaveLength(wrapper, element, 1));
  });

  it('component has default props', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.prop('handleChange')).toBeDefined();
    propToEqual(wrapper, 'title', 'No title');
    propToEqual(wrapper, 'type', 'text');
    propToEqual(wrapper, 'value', '');
    propToEqual(wrapper, 'className', '');
  });

  it('change type of password input', () => {
    const wrapper = shallow(<Input type="password" title="Password" />);
    propToEqual(wrapper.find('input'), 'type', 'password');
    wrapper.find('button').simulate('click');
    wrapper.update();
    propToEqual(wrapper.find('input'), 'type', 'text');
    wrapper.find('button').simulate('click');
    wrapper.update();
    propToEqual(wrapper.find('input'), 'type', 'password');
  });

  it('call callback when input changed', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<Input handleChange={mockCallBack} />);
    wrapper.find('input').simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
