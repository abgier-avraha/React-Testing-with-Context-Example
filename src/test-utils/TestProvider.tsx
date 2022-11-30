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
}
