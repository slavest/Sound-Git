import { Model } from "../..";

export namespace User {
  export interface GetAuthedUserRequest {}
  export interface GetAuthedUserResponse extends Model.UserInfo {}
}
