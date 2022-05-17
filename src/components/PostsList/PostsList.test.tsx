import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostsList from './PostsList';

describe('<PostsList />', () => {
  test('it should mount', () => {
    render(<PostsList />);
    
    const postsList = screen.getByTestId('PostsList');

    expect(postsList).toBeInTheDocument();
  });
});