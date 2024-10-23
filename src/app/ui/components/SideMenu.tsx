import Image from "next/image";
import { Flex, Divider } from "@chakra-ui/react";
import { NavList, NomenClatorsList } from "./nav";

export function SideMenu() {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyItems='center'
            sx={{
                width: '289px',
                minHeight: 'full',
                paddingX: '30px',
                paddingY: '20px',
                gap: '49px'
            }}
        >
            <Flex w='229' h='68' placeContent='center'>
                <Image src={'/logo.png'} alt="Logo" width={162} height={68} />
            </Flex>

            <Flex as='nav'  direction='column' w='229' gap='10' >
                <NavList/>

                <Divider w='auto' h='2' color='#EDF2F7' />

                <NomenClatorsList/>
            </Flex>
        </Flex>
    )
}