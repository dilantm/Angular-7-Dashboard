export interface IAppUser{
    id : string
    userId: string;
    userEmail: string;
    userRmk: string;
    userClientSecret: string;
    isActive: boolean;
    AccessTokenExTime: string;

    apiVersion :string;
    apiController :string;
    apiMethods:string;
}