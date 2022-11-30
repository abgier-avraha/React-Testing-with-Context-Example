import { ApiProvider } from '../hooks/ApiProvider';
import { IApiService } from '../services/api-service/IApiService';
import { MockApiService } from '../services/api-service/providers/MockApiService';

const api = new MockApiService();

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
