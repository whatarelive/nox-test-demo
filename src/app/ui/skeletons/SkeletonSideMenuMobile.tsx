import { Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, VStack} from "@chakra-ui/react";

export function SkeletonSideMenuMobile() {
   return (
       <VStack maxW='250px' direction='column' p={0}>
           <Flex ml='200px' my='12px'>
               <SkeletonCircle w="24px" h="24px" />
           </Flex>

           <Flex p='40px' pt='0px' mb='10px'>
            <Skeleton w="180px" h="68px" />
           </Flex>

           <VStack sx={{
               '&::-webkit-scrollbar': {
                   backgroundColor: 'transparent', // Fondo del scrollbar
               },
               '&::-webkit-scrollbar-thumb': {
                   backgroundColor: 'transparent', // Color del thumb
               },
               '&::-webkit-scrollbar-track': {
                   backgroundColor: 'transparent', // Fondo del track
               },
           }}>
               <VStack gap='10px'>
                   {
                       [...Array(8)].map((_, i) => (
                           <HStack w='120px' h='20px' key={i} my='15px'>
                               <SkeletonCircle w='24px' h='24px'/>
                               <SkeletonText w='120px' h='20px' noOfLines={2}/>
                            </HStack>
                       ))
                   }
               </VStack>

               <SkeletonText w='120px' noOfLines={1} my='15px'/>

               <VStack >
                   {
                       [...Array(6)].map((_, i) => (
                           <HStack key={i} my='10px' >
                               <SkeletonCircle w='14px' h='14px'/>
                               <SkeletonText w='70px' noOfLines={1}/>
                           </HStack>
                       ))
                   }
               </VStack>
           </VStack>
       </VStack>
   )
}
