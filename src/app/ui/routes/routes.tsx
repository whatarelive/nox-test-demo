import { Route } from "../../lib/definitions";

export const routes: Route[]  = [{
    label: 'Dashboard',
    path: '/',
    navIcon: '/svg/dashboard.svg',
},{
    label: 'Orders',
    path: '/orders/list',
    navIcon: '/svg/orders.svg',
},{
    label: 'Banners',
    path: '/banners',
    navIcon: '/svg/banners.svg',
},{
    label: 'Public Info',
    path: '/public-info',
    navIcon: '/svg/publicinfo.svg',
},{
    label: 'Notifications',
    path: '/notifications',
    navIcon: '/svg/notifications.svg',
},{
    label: 'Roulette Game',
    path: '/roulettegame',
    navIcon: '/svg/roulettegame.svg',
},{
    label: 'Inventaries',
    path: '/inventaries',
    navIcon: '/svg/inventaries.svg',
},{
    label: 'Coupons',
        path: '/coupons',
        navIcon: '/svg/coupons.svg',
},{
    label: 'Shippins',
        path: '/shippins',
        navIcon: '/svg/shippings.svg',
}
]