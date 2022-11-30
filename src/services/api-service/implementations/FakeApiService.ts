import { IApiService, PostDTO } from '../IApiService';

export class FakeApiService implements IApiService {
  async getPosts(): Promise<PostDTO[]> {
    return FakePostsRes;
  }
}

const FakePostsRes: PostDTO[] = [
  {
    userId: 1,
    id: 1,
    title: 'Mock post 1',
    body: 'Mock body for post 1.',
  },
  {
    userId: 1,
    id: 2,
    title: 'Mock post 2',
    body: 'Mock body for post 2.',
  },
  {
    userId: 1,
    id: 3,
    title: 'Mock post 3',
    body: 'Mock body for post 3.',
  },
];
