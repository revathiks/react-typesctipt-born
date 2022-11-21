export type authResponse ={
    accessToken: string,
    user : IUser
}

export interface IUser {
    email: string,
    name: string,
    gender :genderType,
    id: number

}

export enum genderType {
    male= 'male',
    female= 'female',
    other= 'other'

}
