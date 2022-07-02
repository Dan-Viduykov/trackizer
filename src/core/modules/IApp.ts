export interface AppState {
    subscriptions: ISub[];
    moneyLimit: number;
    moneySpent: number;
    logoMode: 'imgs' | 'dates';
}

export interface ISub {
    name: string;
    description: string;
    category: string;
    firstPayment: string;
    currency: string;
    price: number;
}