'use client';

import React, { useState } from 'react'
import {Box, Flex} from '@chakra-ui/react'
import { MapPopoverModal } from "@/app/ui/components/orders/card/MapPopoverModal";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { orders } from "@/app/lib/data/data";
import { Order } from "@/app/lib/definitions";

import 'leaflet/dist/leaflet.css';
import '../MapView.css';

export default function MapView() {
    // Ejemplo usando useState, posteriorme se migrara a Redux o Zustand.
    const [selectedOrder, setSelectedOrder] = useState<Order>({} as Order);

    return (
       <Box height="500px">
            <MapContainer
                center={[23.125, -82.363]}
                zoom={13}
                attributionControl={false}
                zoomControl={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Color Map
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {/* El slice() es solo para la prueba. */}
                {orders.slice(0,5).map((order) => (
                    <Flex key={order.orderId}>
                        <Marker
                            position={order.position}
                            icon={new Icon({ iconUrl: '/svg/locationpin.svg', iconSize: [38, 38] })}
                            eventHandlers={{
                                click: () => setSelectedOrder(order)
                            }}
                        >
                            <Popup closeButton={false} className='popup-layout'>
                                    <MapPopoverModal selectedOrder={selectedOrder}/>
                            </Popup>
                        </Marker>
                    </Flex>
                ))}
            </MapContainer>
        </Box>
    )
}