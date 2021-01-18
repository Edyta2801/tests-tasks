import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';


it('renders ok', () => {
    const tree = renderer
        .create(<Button label='Click me !!!' />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});