"use client"
import React, {useState} from 'react';
import {useSession} from "next-auth/react"
import {useRouter} from 'next/navigation'
import Link from "next/link";

interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
}

const URL = "http://localhost:8080/api/v1/products"


const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const {data, status} = useSession()

    if(status === 'unauthenticated') {
        return  <Link href={"/api/auth/signin"}>login</Link>
    }
    console.log(data?.user)
    return (
        <div>
            qweqweqw
        </div>
    )
};


export default Products;