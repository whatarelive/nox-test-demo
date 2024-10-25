import { Badge } from "@chakra-ui/react";
import { Status } from "@/app/lib/definitions";
import { badgeProps } from "@/app/lib/helpers/badges";

interface Props {
    status: Status;
}

export function TableOrderBagde({ status }: Props) {
    const colorScheme = badgeProps( status );

    return (
        <Badge variant='subtle' colorScheme={ colorScheme } pt='0.5px' >
            { status }
        </Badge>
    )
}