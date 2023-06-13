"use client"
import Link from "next/link";
import {ShoppingBag, User} from "lucide-react";
import {useEffect, useState} from "react";


const Navbar = () => {

    return (
        <header className="bg-orange-400 fixed top-0 left-0 right-0 bottom-0 z-50 h-16 flex items-center">
            <div className="container max-w-7xl mx-auto px-2 w-full flex items-center justify-between">
                <Link href="/" className="text-2xl text-slate-900 font-bold leading-tight text-white">
                    TAPHOA
                </Link>

                <div className="flex justify-between gap-2 text-white">
                    <Login/>
                    {/*<ShoppingBag />*/}
                </div>
            </div>
        </header>
    )
};

const Login = () => {
    return (
        <Link href={"/signin"}>
            <User/>
        </Link>
    )
}

export default Navbar;