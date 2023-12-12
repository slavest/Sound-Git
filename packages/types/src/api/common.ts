export enum ResponseStatus {
  SUCCESS = 1,
}

export interface IBaseResponse<T> {
  data: T;
  status: ResponseStatus;
}
