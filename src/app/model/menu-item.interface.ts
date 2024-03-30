
enum foodType {
    Burger, Tacos, Steak,
}

export interface MenuItem {
    id: string, // uuid
    name: string,
    description: string,
    price: number,
    foodType: foodType,
    iamge: string,
}