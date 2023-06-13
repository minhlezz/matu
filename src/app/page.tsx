import {Inter} from 'next/font/google'
import MainLayout from "@/ui/MainLayout";
import Navbar from "@/components/Navbar";
import {useSession} from "next-auth/react";

const inter = Inter({subsets: ['latin']})

export default  function Home() {

    return (
        <>
            <Navbar/>
            <MainLayout>
                {/*    <Products/>*/}
            </MainLayout>
        </>

    )
}


