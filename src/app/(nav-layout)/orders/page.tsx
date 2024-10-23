import { Flex } from "@chakra-ui/react";

export default function OrdersListPage() {
    return (
        <Flex flex={1} sx={{ minWidth: 'full', background: 'violet'}}>
            <div style={{background: "blue"}}>
                <h1>Estamos en <b>OrdersListPage</b></h1>
            </div>
        </Flex>
    )
}