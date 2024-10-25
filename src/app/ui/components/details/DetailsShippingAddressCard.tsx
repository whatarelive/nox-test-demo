import dynamic from "next/dynamic";
import { Card, CardBody, CardHeader, Text, Textarea, Flex } from "@chakra-ui/react";
import { ButtonAssign } from "@/app/ui/components/orders/card";
import { LatLngTuple } from "leaflet";

const MapView = dynamic(() => import('../details/DetailsMap'), {
    ssr: false,
})

interface Props {
    position: LatLngTuple;
    textAreaValue: string;
}

export function DetailsShippingAddressCard({ position, textAreaValue }: Props) {
    return (
        <Card px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader p='0' justifyContent="space-between">
                <Flex p='0' direction="row">
                    <Flex flex='4' direction="column">
                        <Text sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            lineHeight: '30px',
                            color: '#05004E'
                        }}>
                            Shipping Address
                        </Text>
                        <Text sx={{
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '24px',
                            color: '#737791'
                        }} >
                            Order Shipping Address
                        </Text>
                    </Flex>
                    <ButtonAssign title='Assign'/>
                </Flex>
            </CardHeader>
            <CardBody px='0' py='7px' gap='15px'>
                <MapView position={position}/>
                <Textarea fontSize='md' color="gray.700" mt='20px' defaultValue={textAreaValue} isDisabled />
            </CardBody>
        </Card>
    )
}
