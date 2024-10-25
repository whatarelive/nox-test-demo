import { LatLngTuple } from "leaflet";

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
    phone?: string;
    email?: string;
}

export type Status = 'PENDING' | 'TRANSPORTING' | 'PACKAGING' | 'DELIVERED' |'CANCELED';

export interface Order {
    orderId: string;
    imageUrl: string;
    nameUser: string;
    products: string[];
    contact: Contact;
    status: Status;
    position: LatLngTuple;
    address: string;
    description: string;
}

export interface UserOrder {
    userId: number;
    orderId: string;
    userName: string;
    firstName: string;
    lastName: string;
    identityCard: string;
    phone: string;
    email: string;
}