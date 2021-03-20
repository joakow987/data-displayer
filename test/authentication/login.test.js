import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../../src/authentication/login';
import Context from '../../src/actions/context';

let wrapper;
let contextValues;
let setIsLoginFailed;
let setIsUserLogged;

beforeAll(() => {
  global.fetch = jest.fn();

  setIsLoginFailed = jest.fn();
  setIsUserLogged = jest.fn();
});

beforeEach(() => {
  const Container = () => (
    <Context.Provider value={contextValues}>
      <Login
        setIsLoginFailed={setIsLoginFailed}
        setIsUserLogged={setIsUserLogged}
      />
    </Context.Provider>
  );
  wrapper = mount(<Container />);
});
afterEach(() => {
  wrapper.unmount();
  jest.clearAllMocks();
});

describe('Authentication login', () => {
  it('call actions when mount', () => {
    expect(setIsLoginFailed).toHaveBeenCalled();
  });

  it('call actions when password changed', () => {
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'some password' }, });
    expect(setIsLoginFailed).toHaveBeenCalled();
  });

  it('call actions when username changed', () => {
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'some username' }, });
    expect(setIsLoginFailed).toHaveBeenCalled();
  });

});
