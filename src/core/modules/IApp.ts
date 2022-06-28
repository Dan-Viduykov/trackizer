export interface AppState {
    subscriptions: ISub[];
    moneyLimit: number;
    moneySpent: number;
}

export interface ISub {
    name: string;
    description: string;
    category: string;
    firstPayment: string;
    currency: string;
    price: number;
}