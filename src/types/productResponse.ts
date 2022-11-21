export interface IProductResponse {
    id:number,
    title:string,
    price: number,
    description:string,
    category:categoryType,
    image:string
    rating:ratingType
}

export type ratingType = {
    rate: number
    count: number
}

export enum categoryType {
    MensClothing = "men's clothing",
    Jewelry = 'jewelry',
    Electronics = 'electronics',
    WomansClothing = "women's clothing",
}