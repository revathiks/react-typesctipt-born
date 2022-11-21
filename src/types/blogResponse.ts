export interface IBaseBlog {  
    title:string,
    isComplete:boolean
}

export interface IBlog extends IBaseBlog{
    id:number
}