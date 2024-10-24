import {Messenger, NomenClator, Order} from "@/app/lib/definitions";

export const messengers: Messenger[] = [{
    id: 1,
    imageUrl: 'https://bit.ly/broken-linkbit.ly/dan-abramov',
    name: 'Segun Adebayo',
    numOrders: 5,
}, {
    id: 2,
    imageUrl: 'https://bit.ly/broken-linkbit.ly/kent-c-dodds',
    name: 'Segun Adebayo',
    numOrders: 4,
}, {
    id: 3,
    imageUrl: 'https://bit.ly/broken-linkbit.ly/prosper-baba',
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
    { orderId: 'O-4516', imageUrl: "https://bit.ly/broken-link", position: [23.105, -82.383], address: 'Calle 1 #123', description: 'Order 4516', nameUser: "Segun Adebayo", products: ["REDMI 12 C 4/64G", "COLCHON FULL CAMERO"], contact: { phone: "+53 57844512", email: "sage@gmail.com" }, status: "PENDING" },
    { orderId: 'O-4517', imageUrl: "https://bit.ly/broken-link", position: [23.115, -82.373], address: 'Calle 5 e/ 25', description: 'BOMBA DE AGUA UYUSTOOLS', nameUser: "Mark Chandler", products: ["BOMBA DE AGUA"], contact: { email: "mark@gmail.com" }, status: "TRANSPORTING" },
    { orderId: 'O-4518', imageUrl: "https://bit.ly/broken-link", position: [23.125, -82.363], address: 'Calle 3 #456', description: 'Order 4518', nameUser: "Lazar Nikolok", products: ["OLLA REINA ROYAL 6L", "LICUADORA MILEXUS CON JARRA"], contact: { email: "lazar@gmail.com" }, status: "PACKAGING" },
    { orderId: 'O-4519', imageUrl: "https://bit.ly/broken-link", position: [23.135, -82.353], address: 'Calle 4 #789', description: 'Order 4519', nameUser: "Javier Alaves", products: ["CAFETERA ELÉCTRICA ROYAL"], contact: { phone: "+53 53654184" }, status: "DELIVERED" },
    { orderId: 'O-4520', imageUrl: "https://bit.ly/broken-link", position: [23.145, -82.343], address: 'Calle 5 #012', description: 'Order 4520', nameUser: "Lazar Nikolov", products: ["OLLA REINA ROYAL 6L"], contact: { email: "lazar@gmail.com" }, status: "CANCELED" },
    { orderId: 'O-4521', imageUrl: "https://bit.ly/broken-link", position: [23.155, -82.333], address: 'Calle 6 #345, Nuevo Vedado', description: 'Order 4521', nameUser: "Fiona Green", products: ["Product I"], contact: { phone: "+53 58231289" }, status: "PENDING" },
    { orderId: 'O-4522', imageUrl: "https://bit.ly/broken-link", position: [23.165, -82.323], address: 'Calle 7 #678, Playa', description: 'Order 4522', nameUser: "George Black", products: ["Product J", "Product K"], contact: { email: "george@example.com" }, status: "TRANSPORTING" },
    { orderId: 'O-4523', imageUrl: "https://bit.ly/broken-link", position: [23.175, -82.313], address: 'Calle 8 #901, Miramar', description: 'Order 4523', nameUser: "Hannah White", products: ["Product L"], contact: { phone: "+53 53654184", email: "hannah@example.com" }, status: "PACKAGING" },
    { orderId: 'O-4524', imageUrl: "https://bit.ly/broken-link", position: [23.185, -82.303], address: 'Calle 9 #234, Habana del Este', description: 'Order 4524', nameUser: "Ian Grey", products: ["Product M", "Product N"], contact: { phone: "+53 54232243" }, status: "DELIVERED" },
    { orderId: 'O-4525', imageUrl: "https://bit.ly/broken-link", position: [23.195, -82.293], address: 'Calle 10 #567, San Miguel del Padrón', description: 'Order 4525', nameUser: "Julia Red", products: ["Product O"], contact: { phone: "+53 53652184" }, status: "CANCELED" },
];

