# React Testing with React Context

Mock services in your React projects easily with React Context.

## Creating your Test Provider

```tsx
import { ApiProvider } from '../hooks/ApiProvider';
import { IApiService } from '../services/api-service/IApiService';
import { FakeApiService } from '../services/api-service/implementations/FakeApiService';

const api = new FakeApiService();

interface IProps {
  children: React.ReactNode;
  apiService?: IApiService;
}

export function TestProvider(props: IProps) {
  return (
    <ApiProvider implementation={props.apiService ?? api}>
      {props.children}
    </ApiProvider>
  );
```

## Creating a Test

```tsx
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
```

## Template Information

Created using this template: https://github.com/jsjoeio/react-ts-vitest-template

Utilises

- React
- TypeScript
- Vite
- Vitest
- React Testing Library
