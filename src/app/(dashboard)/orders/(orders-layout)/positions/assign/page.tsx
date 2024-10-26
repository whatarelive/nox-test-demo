'use client';

import {
    Button,
    Modal,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Text, FormControl, FormLabel, Select
} from "@chakra-ui/react";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {messengers} from "@/app/lib/data/data";

export default function OrdersPositionsAssignModal() {
    const router = useRouter();
    const [select, setSelect] = useState<string>();

    return (
        <Modal closeOnOverlayClick={false} isOpen={true} onClose={() => router.back()}>
            <ModalOverlay />
            <ModalContent alignSelf='center'>
                <ModalHeader>Assign To Messenger</ModalHeader>
                <ModalCloseButton />
                <ModalBody py='0' gap='10px'>
                    <Text sx={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#2D3748'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <FormControl mt='5px' py='10px'>
                        <FormLabel sx={{
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#737791'
                        }}>
                            Messanger
                            <Text as='span' color='#FF7500'>*</Text>
                        </FormLabel>
                        <Select onChange={({target}) => setSelect(target.value)}>
                            {messengers.map(({ id, name }) => (
                                <option key={id} value={name}>{name}</option>
                            ))}
                        </Select>
                    </FormControl>
                </ModalBody>

                <ModalFooter h='72px' px='24px' py='16px' gap='12px'>
                    <Button onClick={() => router.back()}>
                        Cancel
                    </Button>
                    <Button variant='solid'
                        colorScheme='blue'
                        bg='#FF7500'
                        sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}
                        onClick={() => {
                            alert(`Assign To: ${select}`)
                            router.back();
                        }}
                    >
                        Assign To
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}