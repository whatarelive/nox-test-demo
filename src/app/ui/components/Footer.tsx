import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <footer style={{ backgroundColor: "orange" }}>
            <Flex flex={1} alignItems={'center'} justifyContent={'center'}>
                <Text>@ 2024 VayPati Made by NOX Creation</Text>
            </Flex>
        </footer>
    )
}