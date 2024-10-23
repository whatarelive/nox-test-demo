'use client';

import Image from "next/image";
import {
    Input,
    InputGroup,
    InputRightElement,
    Flex,
    ButtonGroup,
    Button,
    Avatar
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {fonts} from "@/app/ui/fonts/fonts";

export function ToolBar() {
    return (
        <Flex direction='row' gap='10' alignItems="center" justifyContent='center'>
            <form>
                <InputGroup size='md' variant='outline' sx={{
                    width: '323px',
                    height: '40px',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    paddingRight: '40px',
                    paddingLeft: '18px',
                    gap: '10px'
                }}>
                    <InputRightElement>
                        <Search2Icon color='gray.300' />
                    </InputRightElement>
                    <Input
                        className={ fonts.inter.className }
                        placeholder='Find Client'
                        type='text'
                        sx={{
                        border: 'none',
                        ':focus': {
                            border: 'transparent',
                            boxShadow: 'none'
                        }
                    }}
                    />
                </InputGroup>
            </form>

            <ButtonGroup variant='outline' sx={{
                    width: '170px',
                    height: '45px',
                    justifyItems:'center',
                    alignItems:'center',
                }}>
                <Button sx={{ p: '5px', bg: '#EDF2F7', border: 'none', borderRadius: '50px' }}>
                    <Image src="/svg/world.svg" alt="Icon" width="24" height="24" />
                </Button>

                <Button sx={{ p: '5px', bg: '#EDF2F7', border: 'none', borderRadius: '50px' }} >
                    <Image src="/svg/settings.svg" alt="Icon" width="24" height="24" />
                </Button>

                <Button sx={{ p: '0px', border: 'none', borderRadius: '3xl' }} _hover={{ bg: 'transparent' }}>
                    <Avatar src='https://bit.ly/ryan-florence' width='40px' height='40px' />
                </Button>
            </ButtonGroup>
        </Flex>
    )
}