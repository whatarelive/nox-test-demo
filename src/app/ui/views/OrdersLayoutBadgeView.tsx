import { Badge, Stack } from "@chakra-ui/react";
import { ButtonOrderLayoutFilter } from "@/app/ui/components/buttons";

export function OrdersLayoutBadgeView() {
    return (
        <Stack direction='row' alignItems='center' placeContent='end'>
            <Stack direction='row' >
                <Badge colorScheme='gray' variant='solid' pt='0.5px' cursor='pointer' >
                    All Status
                </Badge>
                <Badge colorScheme='blue' variant='outline' pt='0.5px' cursor='pointer' >
                    Transporting
                </Badge>
                <Badge colorScheme='orange' variant='outline' pt='0.5px' cursor='pointer'>
                    Packaging
                </Badge>
                <Badge colorScheme='green' variant='outline' pt='0.5px' cursor='pointer'>
                    Delivered
                </Badge>
                <Badge colorScheme='red' variant='outline' pt='0.5px' cursor='pointer'>
                    Canceled
                </Badge>
            </Stack>
            <ButtonOrderLayoutFilter/>
        </Stack>
    )
}