import React, { useContext } from 'react';
import { IApiService } from '../services/api-service/IApiService';
import { ApiService } from '../services/api-service/implementations/ApiService';

interface IProps {
  implementation: IApiService;
  children: React.ReactNode;
}

const ApiContext = React.createContext<IApiService>(new ApiService());

export function ApiProvider(props: IProps) {
  return (
    <ApiContext.Provider value={props.implementation}>
      {props.children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
