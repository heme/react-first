import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from '../src/Welcome'

describe('Welcome', () => {

  it('renders', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});
