export interface AppState {
    subscriptions: ISub[];
    moneyLimit: number;
    moneySpent: number;
    logoMode: 'imgs' | 'dates';
    categories: ICategory[];
}

export interface ICategory {
    title: string;
    limit: number;
    spent: number;
    icon: string;
}

export interface ISub {
    name: string;
    description: string;
    category: string;
    datePayment: string;
    image: string;
    currency: string;
    price: number;
    id: string;
}