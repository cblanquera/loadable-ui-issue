import React from 'react'
import { ChakraProvider, Button } from '@chakra-ui/react'

export default function Chakra() {
  return (
    <ChakraProvider>
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  )
}