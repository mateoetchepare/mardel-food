
enum foodType {
    Burger, Tacos, Steak,
}

export interface OrderItem {
    id: string, // uuid
    name: string,
    description: string,
    price: number,
    foodType: foodType,
    iamge: HTMLImageElement,
}