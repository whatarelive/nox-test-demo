import {Box, HStack} from "@chakra-ui/react";
import {
    DetailsProductsCard,
    DetailsShippingAddressCard,
    DetailsStatusCard,
    DetailsUserCard
} from "@/app/ui/components/details";

export default function OrdersDetailsPage() {
    return (
        <Box as='section' flex='1' bg='#F9FAF8' sx={{
            borderTopLeftRadius: '50px',
            padding: '60px',
            gap: '20px'
        }}>
            <HStack>
                <DetailsUserCard/>
                <DetailsShippingAddressCard/>
            </HStack>
            <HStack>
                <DetailsProductsCard/>
                <DetailsStatusCard/>
            </HStack>
        </Box>
    )
}