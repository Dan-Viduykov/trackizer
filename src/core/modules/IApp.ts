export interface AppState {
    subscriptions: ISub[];
    moneyLimit: number;
    moneySpent: number;
    logoMode: 'imgs' | 'dates';
    categories: ICategory[];
    colors: string[]
}

export interface ICategory {
    title: string;
    limit: number;
    color: string;
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