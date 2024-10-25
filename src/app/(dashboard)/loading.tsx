import { CircularProgress, Flex} from "@chakra-ui/react";

export default function LoadingPage() {
    return (
        <Flex flex='1' h='100vh'  alignItems='center' justifyContent='center'>
            <CircularProgress isIndeterminate color='#FF7500' />
        </Flex>
    )
}