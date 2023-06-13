"use client"
import React from 'react';
import {Box, Button, Card, CardBody, Heading, Stack, Text} from "@chakra-ui/react";
import {ShoppingBag} from "lucide-react";

interface ProductCard {
    name: string
    description: string
    price: number
}
const ProductCard = (product: ProductCard) => {
    return (
        <Card>
            <CardBody>
                <Stack mt="6" spacing="3">
                    <Heading size="sm" textTransform="uppercase">{product.name}</Heading>
                    <Text>{product.description}</Text>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Text color='orange.600' fontSize='xl'>
                            ${product.price}
                        </Text>
                        <Button variant="ghost" size='md'>
                            <ShoppingBag className="text-orange-950" />
                        </Button>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ProductCard;