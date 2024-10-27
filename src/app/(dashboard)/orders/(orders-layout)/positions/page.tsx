import dynamic from "next/dynamic";
import { CardBody } from "@chakra-ui/react";
import OrdersPositionsAssignModal from './assign/page'

const MapView = dynamic(() => import('../../../../ui/components/orders/MapView'), {
    ssr: false,
})

interface Props {
    readonly searchParams?: {
        modal: string
    }
}

export default function OrdersPositionsPage({ searchParams }: Props) {
    const show = searchParams?.modal === "true"

    return (
        <>
            <CardBody px='0' py='10px' gap='20'>
                <MapView/>
            </CardBody>
            { show && <OrdersPositionsAssignModal/> }
        </>
    )
}