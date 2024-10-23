
export interface Route {
    label: string;
    path: string;
    navIcon: string;
}

export interface Crumb {
    name: string;
    href: string;
}

export interface NomenClator {
    title: string;
}

export interface Messenger {
    id: number;
    imageUrl: string;
    name: string;
    numOrders: number;
}

interface Contact {
    phone?: number;
    email?: string;
}

type Status = 'PENDING' | 'TRANSPORTING' | 'PACKAGING' | 'DELIVERED' |'CANCELED';

export interface Order {
    orderId: number;
    imageUrl: string;
    nameUser: string;
    products: string[];
    contact: Contact;
    status: Status;
}