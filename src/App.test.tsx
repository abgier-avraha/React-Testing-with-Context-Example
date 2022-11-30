import { render, screen, waitFor } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import App from './App';
import { TestProvider } from './test-utils/TestProvider';

it('Renders posts from the API service', async () => {
  // Arrange
  const getPosts = async () => [
    {
      userId: 1,
      id: 1,
      title: 'Mock post 1',
      body: 'Mock body for post 1.',
    },
  ];

  const getPostsMock: typeof getPosts = vi.fn().mockImplementation(getPosts);

  // Act
  render(
    <TestProvider
      apiService={{
        getPosts: getPostsMock,
      }}
    >
      <App />
    </TestProvider>
  );

  // Assert
  await waitFor(() => {
    expect(getPostsMock).toHaveBeenCalledOnce();

    expect(screen.getByText('Mock post 1')).toBeInTheDocument();
    expect(screen.getByText('Mock body for post 1.')).toBeInTheDocument();
  });
});
