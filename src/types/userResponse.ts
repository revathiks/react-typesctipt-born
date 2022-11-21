export interface IBaseUSer {
    name:string,
    email:string,
    password:string,
    receiveUpdate:boolean,
    receiveNewsletter:boolean
}

export  interface IFormUser extends IBaseUSer {
    id:number
}