export type User = {
    _id: string,
    email: string,
    name: string,
    address: string,
    city: string,
    country: string,
}

export type MenuItem = {
    _id: string,
    name: string,
    price: number
}

export type Restaurant = {
    _id: string,
    user: string,
    restayrantName: string,
    city: string,
    country: string,
    deliveryPrice: number,
    estimatedDeliveryTime: number,
    cuisines: string[],
    menuItem: MenuItem[],
    imageUrl: string,
    lastUpdated: string
}