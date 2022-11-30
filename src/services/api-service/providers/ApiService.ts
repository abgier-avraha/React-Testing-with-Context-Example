import { IApiService, PostDTO } from '../IApiService';

export class ApiService implements IApiService {
  async getPosts(): Promise<PostDTO[]> {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=1'
    );
    return await res.json();
  }
}
