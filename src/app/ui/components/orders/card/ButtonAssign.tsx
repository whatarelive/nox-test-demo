'use client'

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface Props {
    title: string;
    onClick?: () => void;
}

export function ButtonAssign({ title }: Props) {
    const router = useRouter();

    return (
        <Button
            size={ title === 'Assign' ? 'xs' : 'md' }
            variant='solid'
            colorScheme='blue'
            sx={{
                flex: '1',
                paddingX: '16px',
                gap: '8px',
                borderRadius: '16px',
                bg: '#FF7500',
                fontWeight: '600',
                fontSize: title === 'Assign' ? '12px' : '16px',
                lineHeight: title === 'Assign' ? '16px' : '24px'
            }}
            onClick={() => router.push('/orders/positions')}
        >
            { title }
        </Button>
    )
}