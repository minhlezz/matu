"use client"
import React, {FC} from 'react';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'


interface ProvidersProps {
    children: React.ReactNode
}
const Providers:FC<ProvidersProps> = ({children}) => {
    return (
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
};

export default Providers;