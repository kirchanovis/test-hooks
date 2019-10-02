import renderer from 'react-test-renderer'
import React from 'react';
import { Button } from './../Button';

test('renders default button', () => {
    const tree = renderer.create(
        <Button
            text="Example"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders disabled button', () => {
    const tree = renderer.create(
        <Button
            disabled
            text="Example"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});


