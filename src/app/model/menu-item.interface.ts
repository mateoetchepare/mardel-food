
export enum foodType {
    bruger = 'burger', tacos = 'tacos', steak = 'steak',
}

export interface MenuItem {
    id: number,
    name: string,
    description: string,
    price: number,
    foodType: foodType,
    image: string,
}