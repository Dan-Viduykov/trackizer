export interface AppState {
    subscriptions: ISub[]
}

export interface ISub {
    name: string;
    description: string;
    category: string;
    firstPayment: string;
    currency: string;
    price: number;
}