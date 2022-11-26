import { TypeWithKey } from '../models/type-with.key';
export const getValidationError = (errorCode: any) => {
  const config: TypeWithKey<string> = {
    ERR_NETWORK: 'Se rompió la red',
  };

  return config[errorCode];
};
