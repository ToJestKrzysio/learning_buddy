import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('It renderes Hello World in headline', () => {
    const { container } = render(<App />);
    expect(container.querySelector('h1')).toContainHTML('Hello World!');
});
