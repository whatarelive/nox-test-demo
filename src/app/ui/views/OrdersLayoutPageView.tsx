import React from "react";
import { Card } from "@chakra-ui/react";
import { OrdersViewCardHeader } from "@/app/ui/components/orders";

interface Props {
    children: React.ReactNode;
}

export function OrdersLayoutPageView({ children }: Props) {
    return (
        <Card flex='3' sx={{
            borderRadius: '20px',
            paddingX: '35px',
            paddingY: '30px',
            gap: '5px'
        }}>
            <OrdersViewCardHeader/>
            { children }
        </Card>
    )
}