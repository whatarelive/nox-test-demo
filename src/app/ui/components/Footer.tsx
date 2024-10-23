import { Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <footer>
            <Text sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '18px',
                color: '#737791'
            }}>
                © 2024 VoyPati Made by NOX Creation
            </Text>
        </footer>
    )
}