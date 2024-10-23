import {Messenger, NomenClator, Order} from "@/app/lib/definitions";

export const messengers: Messenger[] = [{
    id: 1,
    imageUrl: 'https://bit.ly/dan-abramov',
    name: 'Segun Adebayo',
    numOrders: 5,
}, {
    id: 2,
    imageUrl: 'https://bit.ly/kent-c-dodds',
    name: 'Segun Adebayo',
    numOrders: 4,
}, {
    id: 3,
    imageUrl: 'https://bit.ly/prosper-baba',
    name: 'Segun Adebayo',
    numOrders: 1,
}]

export const nomenclators: NomenClator[] = [{
    title: "Clients"
},{
    title: "Users"
},{
    title: "Categories"
},{
    title: "Products"
},{
    title: "Order Status"
},{
    title: "Warehouses"
}]

export const orders: Order[] = [
    { orderId: 1, imageUrl: "url1.jpg", nameUser: "Alice Johnson", products: ["Product A", "Product B"], contact: { phone: 1234567890, email: "alice@example.com" }, status: "PENDING" },
    { orderId: 2, imageUrl: "url2.jpg", nameUser: "Bob Smith", products: ["Product C"], contact: { phone: 9876543210 }, status: "TRANSPORTING" },
    { orderId: 3, imageUrl: "url3.jpg", nameUser: "Charlie Brown", products: ["Product D", "Product E"], contact: { email: "charlie@example.com" }, status: "PACKAGING" },
    { orderId: 4, imageUrl: "url4.jpg", nameUser: "Diana Prince", products: ["Product F"], contact: { phone: 5555555555, email: "diana@example.com" }, status: "DELIVERED" },
    { orderId: 5, imageUrl: "url5.jpg", nameUser: "Edward Elric", products: ["Product G", "Product H"], contact: {}, status: "CANCELED" },
    { orderId: 6, imageUrl: "url6.jpg", nameUser: "Fiona Green", products: ["Product I"], contact: { phone: 1111111111 }, status: "PENDING" },
    { orderId: 7, imageUrl: "url7.jpg", nameUser: "George Black", products: ["Product J", "Product K"], contact: { email: "george@example.com" }, status: "TRANSPORTING" },
    { orderId: 8, imageUrl: "url8.jpg", nameUser: "Hannah White", products: ["Product L"], contact: { phone: 2222222222, email: "hannah@example.com" }, status: "PACKAGING" },
    { orderId: 9, imageUrl: "url9.jpg", nameUser: "Ian Grey", products: ["Product M", "Product N"], contact: {}, status: "DELIVERED" },
    { orderId: 10, imageUrl: "url10.jpg", nameUser: "Julia Red", products: ["Product O"], contact: { phone: 3333333333 }, status: "CANCELED" },
    { orderId: 11, imageUrl: "url11.jpg", nameUser: "Kevin Blue", products: ["Product P", "Product Q"], contact: { email: "kevin@example.com" }, status: "PENDING" },
    { orderId: 12, imageUrl: "url12.jpg", nameUser: "Laura Yellow", products: ["Product R"], contact: { phone: 4444444444, email: "laura@example.com" }, status: "TRANSPORTING" },
    { orderId: 13, imageUrl: "url13.jpg", nameUser: "Mike Orange", products: ["Product S", "Product T"], contact: {}, status: "PACKAGING" },
    { orderId: 14, imageUrl: "url14.jpg", nameUser: "Nina Purple", products: ["Product U"], contact: { phone: 5555555555 }, status: "DELIVERED" },
    { orderId: 15, imageUrl: "url15.jpg", nameUser: "Oscar Pink", products: ["Product V", "Product W"], contact: { email: "oscar@example.com" }, status: "CANCELED" },
    { orderId: 16, imageUrl: "url16.jpg", nameUser: "Paula Cyan", products: ["Product X"], contact: { phone: 6666666666 }, status: "PENDING" },
    { orderId: 17, imageUrl: "url17.jpg", nameUser: "Quentin Magenta", products: ["Product Y", "Product Z"], contact: { email: "quentin@example.com" }, status: "TRANSPORTING" },
    { orderId: 18, imageUrl: "url18.jpg", nameUser: "Rachel Silver", products: ["Product AA"], contact: { phone: 7777777777, email: "rachel@example.com" }, status: "PACKAGING" },
    { orderId: 19, imageUrl: "url19.jpg", nameUser: "Steve Gold", products: ["Product AB", "Product AC"], contact: {}, status: "DELIVERED" },
    { orderId: 20, imageUrl: "url20.jpg", nameUser: "Tina Bronze", products: ["Product AD"], contact: { phone: 8888888888 }, status: "CANCELED" },
];
