import Image from "next/image";
import { Flex, Divider } from "@chakra-ui/react";
import { NavList, NomenClatorsList } from "./nav";

export function SideMenu() {
    return (
        <Flex
            maxH="100vh"
            flexDirection='column'
            alignItems='center'
            justifyItems='center'
            sx={{
                paddingX: '30px',
                paddingTop: '20px',
                gap: '49px',
            }}
        >
            <Flex w='229' h='68' placeContent='center'>
                <Image src={'/logo.png'} alt="Logo" width={162} height={68} />
            </Flex>

            <Flex as='nav' h='inherit' direction='column' gap='10px' overflowY='auto' sx={{
                '&::-webkit-scrollbar': {
                    backgroundColor: 'transparent', // Fondo del scrollbar
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'transparent', // Color del thumb
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent', // Fondo del track
                },
            }} >
                <NavList/>
                <Divider w='auto' h='2px' color='#EDF2F7' />
                <NomenClatorsList/>
            </Flex>
        </Flex>
    )
}