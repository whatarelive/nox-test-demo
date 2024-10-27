'use client';

import React from 'react'
import { Box } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon, LatLngTuple } from 'leaflet'

import 'leaflet/dist/leaflet.css';

interface Props {
    position: LatLngTuple;
}

export default function DetailsMap({ position }: Props) {
    return (
        <Box height='282px' >
            <MapContainer
                center={[...position]}
                zoom={13}
                attributionControl={false}
                zoomControl={false}
                style={{height: '100%', width: '100%'}}
            >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"/>
                    <Marker
                        position={position}
                        icon={
                            new Icon({
                                iconUrl: '/svg/locationpin.svg',
                                iconSize: [38, 38]
                            })
                        }
                    />
            </MapContainer>
        </Box>
    )
}