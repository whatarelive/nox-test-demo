'use client'

import { Button } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
    title: string;
    onClick?: () => void;
}

export function ButtonAssign({ title }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const isTitleAssign = title === 'Assign';

    const handleClick = () => {
        if (isTitleAssign && pathname.includes('positions')) {
            router.push('/orders/positions?modal=true');
        }
        if( !pathname.includes('positions') ) {
            router.push('/orders/positions');
        }
    }
    
    return (
        <Button
            size='md'
            variant='solid'
            colorScheme='blue'
            sx={{
                flex: '1',
                w:'109px',
                borderRadius: '20px',
                bg: '#FF7500',
                fontWeight: '600',
                fontSize: isTitleAssign ? '14px' : '16px',
                lineHeight: isTitleAssign ? '16px' : '24px'
            }}
            _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
            transition="all 0.2s"
            onClick={ handleClick }
        >
            { title }
        </Button>
    )
}